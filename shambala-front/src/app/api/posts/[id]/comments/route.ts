import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { getPostId } from "../helper";
import { NextRequest } from "next/server";

export async function GET(request: NextApiRequest) {
  const session = cookies().get("session")?.value || "";
  const postId = getPostId(request.url);

  const comments = await fetch(
    `${process.env.SHAMBALA_API}/posts/${postId}/comments`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    }
  );

  return comments;
}

export async function POST(request: NextRequest) {
  const session = cookies().get("session")?.value || "";
  const postId = getPostId(request.url);

  const body = await request.json();

  const respose = await fetch(
    `${process.env.SHAMBALA_API}/posts/${postId}/comment`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    }
  );

  return respose;
}
