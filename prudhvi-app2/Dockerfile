FROM node:20-alpine

WORKDIR /prudhvi/app/

COPY package.json .
COPY nicejob.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "nicejob.js"]
