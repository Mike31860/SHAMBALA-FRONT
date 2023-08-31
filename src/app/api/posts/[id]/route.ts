import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = cookies().get("session")?.value || "";
  const slugs = request.url.split("/");

  if (slugs.length <= 1) {
    return NextResponse.json({ status: 400 });
  }

  const slug = slugs[slugs.length - 1];

  const posts = await fetch(`${process.env.SHAMBALA_API}/posts/${slug}`, {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  return posts;
}
