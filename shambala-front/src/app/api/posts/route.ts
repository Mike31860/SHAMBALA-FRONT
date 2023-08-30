import { cookies } from "next/headers";

export async function GET() {
  const session = cookies().get("session")?.value || "";

  console.log("session ", session);

  const posts = await fetch(`${process.env.SHAMBALA_API}/posts`, {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  return posts;
}
