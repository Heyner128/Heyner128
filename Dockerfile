FROM node:22.5.1 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
ENV NODE_ENV=production
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]