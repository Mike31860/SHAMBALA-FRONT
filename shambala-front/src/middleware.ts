import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  console.log("session ", session);
  if (!session) {
    const isLoginRequested = request.nextUrl.pathname.includes("/login");
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

  console.log("session ", responseAPI);

  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.url.includes("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
