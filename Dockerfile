FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4005

RUN npm run build
CMD [ "node", "./dist/src/index.js" ]