import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await cookies().delete("session");
  console.log("LOGOUT ");
  return NextResponse.json({ isLogged: false }, { status: 200 });
}
