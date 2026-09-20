import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = (await headers()).get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const userId = session.metadata?.user_id;
    const courseId = session.metadata?.course_id;

    if (userId && courseId) {
      const { error } = await supabaseAdmin
        .from("enrollments")
        .upsert(
          { user_id: userId, course_id: courseId },
          { onConflict: "user_id,course_id" }
        );
      if (error) console.error("Enrollment insert failed:", error);
    }
  }

  return NextResponse.json({ received: true });
}