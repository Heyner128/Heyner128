import { getCookie } from "@/lib/utils";
import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async ( ctx, next ) => {
    const { preferredLocale } = ctx;
    const requestedLocale = getCookie("preferredLocale", ctx.request.headers.get("cookie"));
    const response = await next();

    return new Response(
        response.body,
        {
            status: response.status,
            headers: {
                ...response.headers,
                "Set-Cookie": `preferredLocale=${requestedLocale || preferredLocale}; Path=/; SameSite=Lax`,
            },
        }
    );
});