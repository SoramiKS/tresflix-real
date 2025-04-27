import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://91fb-2a09-bac5-39e4-25af-00-3c1-3.ngrok-free.app";

export async function POST(req: NextRequest, { params }: { params: { action: string } }) {
  const { action } = params; // signup atau signin
  const body = await req.json();

  const res = await fetch(`${API_BASE_URL}/auth/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
