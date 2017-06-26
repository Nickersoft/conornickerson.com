FROM node:7.10

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /server && cp -a /tmp/node_modules /server

WORKDIR /server
ADD . /server

RUN npm install

WORKDIR /server

EXPOSE 8888
ENTRYPOINT ["npm", "start"]