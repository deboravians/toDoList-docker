FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./server /app/server
COPY ./public /app/public

EXPOSE 3000

CMD ["node", "/app/server/index.js"]
