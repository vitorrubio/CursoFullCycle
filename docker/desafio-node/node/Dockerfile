FROM node:15
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm install
USER node  

EXPOSE 3000

#CMD ["node", "index.js"]
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "node", "index.js"]



