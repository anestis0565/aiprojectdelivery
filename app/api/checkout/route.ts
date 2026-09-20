import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Please sign in first" }, { status: 401 });
  }

  const { courseId } = await request.json();

  const { data: course } = await supabase
    .from("courses")
    .select("id, title, price_cents")
    .eq("id", courseId)
    .maybeSingle();

  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "aud",
          product_data: { name: course.title },
          unit_amount: course.price_cents,
        },
        quantity: 1,
      },
    ],
    metadata: { user_id: user.id, course_id: course.id },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/buy/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/buy`,
  });

  return NextResponse.json({ url: session.url });
}