import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async ( ctx, next ) => {
    const { preferredLocale } = ctx;
    const response = await next();

    return new Response(
        response.body,
        {
            status: response.status,
            headers: {
                ...response.headers,
                "Set-Cookie": `preferredLocale=${preferredLocale}; Path=/; SameSite=Lax`,
            },
        }
    );
});