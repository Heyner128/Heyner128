type Cookie = {
  name: string;
  value: string;
  expires?: Date;
  samesite?: "Lax" | "Strict" | "None";
  domain?: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
};

export function getCookieValue(
  name: string,
  cookieString: string = document.cookie
): string | undefined {
  const cookie = parseCookieString(cookieString)
    .find((cookie) => cookie.name === name)

  if(cookie === undefined) return;

  return cookie.value;
}

function parseCookieString(cookieString: string): Cookie[] {
  const nameValuePairs = cookieString.split(";");
  const cookies = [];
  for (const pair of nameValuePairs) {
    const [name, value] = pair.split("=");
    if (name && value) {
      cookies.push({ name: name.trim(), value : value.trim() });
    }
  }
  return cookies;
}

export function setCookieWithDefaults(cookie: Cookie) {
  cookie.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  cookie.samesite = "Lax";
  cookie.path = "/";
  setCookie(cookie);
}

function setCookie(cookie: Cookie) {
  document.cookie = serializeCookie(cookie);
}

export function serializeCookie(cookie: Cookie): string {
  let cookieString = `${cookie.name}=${cookie.value}`;
  for (const [key, value] of Object.entries(cookie)) {
    if (key !== "name" && key !== "value") {
      cookieString += `;${key}=${value}`;
    }
  }
  return cookieString;
}




