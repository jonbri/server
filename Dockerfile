FROM mcr.microsoft.com/playwright:v1.39.0-jammy
EXPOSE 4000
COPY . /src
# RUN cd /src && npm install
CMD ["node", "./src/server.js"]

