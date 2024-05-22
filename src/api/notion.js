const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : process.env.NODE_ENV === "production"
    ? "https://api.audiome.io"
    : "";

// this is not great
export const logErrors = (error) => {
  try {
    console.error(`--Error: ${error.response.data.error.message}`);
    console.error(`--Error: ${error.response.status}`);
  } catch (error) {
    return;
  }
};

export const checkRefresh = async () => {
  const now = new Date();
  const expiresAt = window.localStorage.getItem("expiresAt");
  if (now.getTime() > parseInt(expiresAt)) {
    console.error("Access token expired.  Refreshing...");
    const refreshToken = window.localStorage.getItem("refreshToken");
    return storeAccessToken(refreshToken, true);
  } else {
    return Promise.resolve(true);
  }
};

export const storeAccessToken = async (code, refresh = false) => {
  const path = `api/v1/getToken?code=$`;
  const result = await api.get(path).catch((error) => {
    // TODO: (akv) this doesn't work if the endpoint doesn't exist
    logErrors(error);
    return null;
  });
  if (result && result.data?.access_token) {
    window.localStorage.setItem("accessToken", result?.data?.access_token);
    if (!refresh) {
      window.localStorage.setItem("refreshToken", result?.data?.refresh_token);
    }
    const now = new Date();
    let expiresAt = now.getTime() + result.data.expires_in * 1000;
    window.localStorage.setItem("expiresAt", expiresAt.toString());
  }
  return result?.data?.refresh_token;
};
