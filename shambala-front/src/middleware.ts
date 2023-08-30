import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  console.log("session ", session);

  if (!session) {
    const isLoginRequested = request.url.includes("/login");
    console.log("isLoginRequested ", isLoginRequested);

    return isLoginRequested
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", request.url));
  }

  const responseAPI = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/login`,
    {
      headers: {
        Cookie: `session=${session?.value}`,
      },
    }
  );

  if (responseAPI.status !== 200) {
    if (request.url.includes("/login")) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
