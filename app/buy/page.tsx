import { createClient } from "@/lib/supabase/server";
import BuyButton from "./BuyButton";

export default async function BuyPage() {
  const supabase = await createClient();
  const { data: course } = await supabase
    .from("courses")
    .select("id, title, price_cents")
    .eq("slug", "ai-project-delivery-foundations")
    .maybeSingle();

  if (!course) return <main style={{ padding: 40 }}>Course not found.</main>;

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: "0 16px" }}>
      <h1>{course.title}</h1>
      <p>Price: A${(course.price_cents / 100).toFixed(2)}</p>
      <BuyButton courseId={course.id} />
    </main>
  );
}