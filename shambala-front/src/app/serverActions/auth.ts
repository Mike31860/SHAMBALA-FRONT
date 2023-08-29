import { User } from "firebase/auth";

export const appLogout = (): Promise<{ status: number }> => {
  const response = fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/logout`, {
    method: "POST",
  });

  console.log(response);
  return response;
};

export const appLogin = (tokenId: string): Promise<Response> => {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
  });
};
