FROM node:20-alpine

WORKDIR /prudhvi/app/

COPY package.json .
COPY newplace.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "newplace.js"]
