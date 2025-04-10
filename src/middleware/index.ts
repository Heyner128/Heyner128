import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async ( ctx, next ) => {
    const { searchParams: query } = new URL(ctx.request.url);
    const { preferredLocale } = ctx;
    if(!query.has('lang')) {
        return ctx.redirect(`/?lang=${preferredLocale}`, 302);
    }

    return next();
});