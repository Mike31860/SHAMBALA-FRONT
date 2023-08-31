import { auth } from "firebase-admin";
import { customInitApp } from "@infrastructure/lib/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
  const idToken = authorization.split("Bearer ")[1];
  const decodedToken = await auth().verifyIdToken(idToken);
  await auth().setCustomUserClaims(decodedToken.uid, { role: "user" });

  if (!decodedToken) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  //Generate session cookie
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth().createSessionCookie(idToken, {
    expiresIn,
  });
  const options = {
    name: "session",
    value: sessionCookie,
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
  };

  await cookies().set(options);

  return NextResponse.json({ isLogged: true }, { status: 200 });
}

export async function GET() {
  const session = cookies().get("session")?.value || "";

  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  try {
    const decodedClaims = await auth().verifySessionCookie(session, true);
    if (!decodedClaims) {
      cookies().delete("session");
      //ADD HANDLING ERROR IN CASE TOKEN HAS EXPIRED. ADd logic to refresh token.
      // See: https://stackoverflow.com/questions/62389267/how-to-handle-firebaseauth-token-expiration
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    return NextResponse.json({ isLogged: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
}
