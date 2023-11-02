FROM mcr.microsoft.com/playwright:v1.39.0-jammy
EXPOSE 4000
COPY . /src
RUN cd /src && yarn install
WORKDIR /src
CMD ["node", "./server.js"]

