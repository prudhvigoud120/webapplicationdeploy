FROM node:20-alpine

WORKDIR /prudhvi/app/

COPY package.json .
COPY Nice Job.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "Nice Job.js"]
