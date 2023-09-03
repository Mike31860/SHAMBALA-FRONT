export const appLogout = (): Promise<{ status: number }> => {
  const response = fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/logout`, {
    method: "POST",
  });

  return response;
};

export const appLogin = async (tokenId: string): Promise<Response> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/login`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
  });
};

export const getSession = async (): Promise<string> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/login`);
  return await response.json();
};
