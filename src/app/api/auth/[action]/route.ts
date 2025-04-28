import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "http://10.10.10.134";

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
