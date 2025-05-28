FROM node:23.11.1 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
FROM node:23.11.1 AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
ENV HOST=0.0.0.0
ENV NODE_ENV=production
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]