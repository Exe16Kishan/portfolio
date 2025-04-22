FROM node:22-alpine

WORKDIR /portfolio

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm","run","dev" ]

