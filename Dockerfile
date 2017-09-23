FROM node:8.5-alpine

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /server && cp -a /tmp/node_modules /server

WORKDIR /server
ADD . /server

RUN yarn install

WORKDIR /server

EXPOSE 8888
ENTRYPOINT ["npm", "start"]