export function getCookie(
  name: string,
  rawValues: string | null | undefined = document.cookie
) {
  const cookieValue = rawValues
    ?.split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
  return cookieValue ?? "";
}

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; SameSite=Lax`;
}
