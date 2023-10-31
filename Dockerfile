FROM node:18
EXPOSE 4000
COPY . /src
RUN cd /src && npm install
CMD ["node", "./src/server.js"]

