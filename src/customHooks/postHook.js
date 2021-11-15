export const usePostHook = () => {
  const postRequest = async (
    token,
    url = "https://api.themoviedb.org/3/authentication/session/new?api_key=a9096838b82c3238417da01b26dc07aa",
    method = "POST",
    headers = { "Content-Type": "application/json" }
  ) => {
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(token),
        headers,
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { postRequest };
};
