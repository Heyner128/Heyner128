FROM node:24.1.0-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --no-package-lock
COPY . .
RUN npm run build
FROM node:24.1.0-slim AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
ENV HOST=0.0.0.0
ENV NODE_ENV=production
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]