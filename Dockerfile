FROM node:12.18.2-alpine

WORKDIR /app

COPY dist/ ./
COPY package.json ./

EXPOSE 8000

ENV NODE_ENV=prod

ENTRYPOINT npm install && node server/app.js
