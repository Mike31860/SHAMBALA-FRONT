import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getPostId } from "../helper";

export async function POST(request: NextRequest) {
  const session = cookies().get("session")?.value || "";
  const postId = getPostId(request.url);

  const response = await fetch(
    `${process.env.SHAMBALA_API}/posts/${postId}/like`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
      method: "POST",
    }
  );

  return response;
}
