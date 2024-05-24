const apiURL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : // eslint-disable-next-line no-undef
    process.env.NODE_ENV === "production"
    ? "https://the-nook-backend.vercel.app"
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
    return fetchAccessToken(refreshToken, true);
  } else {
    return Promise.resolve(true);
  }
};

export const fetchAccessToken = async (app, code, refresh = false) => {
  const params = new URLSearchParams({ code, app, refresh });
  const path = `${apiURL}/api/v1/getToken?` + params;

  const result = await fetch(path).catch((error) => {
    // TODO: (akv) this doesn't work if the endpoint doesn't exist
    logErrors(error);
    return null;
  });
  const body = await result.json();
  if (result && body.access_token) {
    window.localStorage.setItem(`${app}AccessToken`, body.access_token);
    if (!refresh) {
      window.localStorage.setItem(`${app}RefreshToken`, body.refresh_token);
    }
    const now = new Date();
    let expiresAt = now.getTime() + body.expires_in * 1000;
    window.localStorage.setItem(`${app}TokenExpiresAt`, expiresAt.toString());
  }
  return body;
};
