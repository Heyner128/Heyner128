FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:22-alpine
COPY --from=builder /app/dist /app
RUN node /app/server/entry.mjs
EXPOSE 80