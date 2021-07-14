import { AUTH_CONFIG } from "@dataware-tools/app-common";

const APP_ROUTE = {
  HOME: "/",
};

const SwrOptions = {
  errorRetryCount: 1,
};

const redirectUri =
  typeof window === "undefined" ? null : window.location.origin;

const authConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || AUTH_CONFIG.domain,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || AUTH_CONFIG.clientId,
  apiUrl: process.env.REACT_APP_AUTH0_API_URL || AUTH_CONFIG.apiUrl,
};
export { APP_ROUTE, SwrOptions, authConfig, redirectUri };
