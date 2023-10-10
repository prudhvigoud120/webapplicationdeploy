FROM node:20-alpine

WORKDIR /prudhvi/app/

COPY package.json .
COPY Nicejob.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "nicejob.js"]
