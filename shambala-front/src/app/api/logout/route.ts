import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await cookies().delete("session");
  return NextResponse.redirect(new URL("/", request.url));
}
