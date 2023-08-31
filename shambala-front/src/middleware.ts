import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const isNotProtectedPathName =
    request.nextUrl.pathname == "/" || request.nextUrl.pathname == "/login";

  if (!session) {
    if (isNotProtectedPathName) {
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
    if (isNotProtectedPathName) {
      return NextResponse.redirect(new URL("/shambala", request.url));
    }

    return NextResponse.next();
  }

  if (isNotProtectedPathName) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

//Add your protected routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/shambala/:path",
  ],
};
