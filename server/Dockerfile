FROM node:14-alpine

EXPOSE $PORT

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]