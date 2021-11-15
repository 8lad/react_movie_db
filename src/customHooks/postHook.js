export const usePostHook = () => {
  const postRequest = async (
    url,
    body,
    method = "POST",
    headers = { "Content-Type": "application/json" }
  ) => {
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      console.log(body);
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { postRequest };
};
