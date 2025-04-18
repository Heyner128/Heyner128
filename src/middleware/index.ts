import { getCookieValue, serializeCookie } from "@/lib/cookies";
import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LOCALE } from "locales.config.mjs";


export const onRequest = defineMiddleware(async ( ctx, next ) => {
    const { preferredLocale } = ctx;
    const cookieHeader = ctx.request.headers.get("cookie") ?? "" ;
    const requestedLocale = getCookieValue("preferredLocale", cookieHeader);
    const response = await next();

    return new Response(
        response.body,
        {
            status: response.status,
            headers: {
                ...response.headers,
                "Set-Cookie": serializeCookie({
                    name: "preferredLocale",
                    value: requestedLocale ?? preferredLocale ?? DEFAULT_LOCALE,
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    samesite: "Lax",
                    path: "/",
                }),
            },
        }
    );
});