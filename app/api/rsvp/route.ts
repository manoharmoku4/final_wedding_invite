import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const sheetUrl = process.env.RSVP_SHEET_URL;
  if (!sheetUrl) {
    return NextResponse.json({ error: "RSVP endpoint not configured" }, { status: 500 });
  }

  const body = await req.json();
  if (!body?.first) {
    return NextResponse.json({ error: "First name is required" }, { status: 400 });
  }

  try {
    const res = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });
    if (!res.ok) {
      throw new Error(`Sheet webhook responded ${res.status}`);
    }
    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ error: "Failed to submit RSVP" }, { status: 502 });
  }
}
