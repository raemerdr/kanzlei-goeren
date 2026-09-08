import { NextResponse } from "next/server";
import { deliverLead, validateLead } from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const result = validateLead(payload);
  if (!result.ok) {
    return NextResponse.json(
      { error: "validation_failed", fields: result.errors },
      { status: 422 },
    );
  }

  try {
    const delivered = await deliverLead(result.lead);

    // In development the lead is only logged, which is enough to walk the whole
    // flow through to /danke. In production an undelivered lead is a failure.
    if (!delivered && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] delivery failed", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
