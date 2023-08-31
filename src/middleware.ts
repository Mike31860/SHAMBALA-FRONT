import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  const isLoginPath = request.nextUrl.pathname == "/";

  if (!session) {
    if (isLoginPath) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  const responseAPI = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/login`,
    {
      headers: {
        Cookie: `session=${session?.value}`,
      },
    }
  );

  const isValidSesson = responseAPI.status === 200;

  if (isValidSesson) {
    if (isLoginPath) {
      return NextResponse.redirect(new URL("/shambala", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

//Add your protected routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/shambala/:path",
  ],
};
