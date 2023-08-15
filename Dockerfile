FROM node:20
WORKDIR /nodejs_app
COPY package.json /nodejs_app
RUN npm install
COPY . /nodejs_app
CMD npm run db:init && npm start
EXPOSE 3000