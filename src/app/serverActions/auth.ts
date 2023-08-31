export const appLogout = (): Promise<{ status: number }> => {
  const response = fetch(`/api/logout`, {
    method: "POST",
  });

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
