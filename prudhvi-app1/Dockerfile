FROM node:20-alpine

WORKDIR /prudhvi/app/

COPY package.json .
COPY HelloWorld.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "HelloWorld.js"]
