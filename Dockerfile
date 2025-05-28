FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV NODE_ENV=production
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]