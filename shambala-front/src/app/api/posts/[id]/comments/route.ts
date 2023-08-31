import { cookies } from "next/headers";
import { getPostId } from "../helper";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
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
      method: "POST",
      headers: {
        Authorization: `Bearer ${session}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return respose;
}
