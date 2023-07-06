FROM node:18-alpine
WORKDIR /web_service
COPY ./ /web_service
RUN npm install pnpm -g
RUN pnpm install


