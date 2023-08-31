import { cookies } from "next/headers";

export async function GET() {
  const session = (await cookies().get("session")?.value) || "";

  const posts = await fetch(`${process.env.SHAMBALA_API}/posts`, {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  return posts;
}

export async function POST(request: Request) {
  const session = (await cookies().get("session")?.value) || "";
  const post = await request.json();
  const response = await fetch(`${process.env.SHAMBALA_API}/posts/create`, {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    method: "POST",
    body: JSON.stringify(post),
  });

  return response;
}
