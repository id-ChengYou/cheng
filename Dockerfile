# syntax=docker/dockerfile:1

FROM node:20.11.1-alpine
WORKDIR /app
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000