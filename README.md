# server

[GitHub](https://github.com/jonbri/server)

```sh
yarn install
yarn start
```

## Playwright

```sh
# interactive mode
npx playwright test --ui-host=0.0.0.0 --ui-port=8080
```

## Docker

Run container:

```
# run Dockerfile directly
sudo docker stop <container-id>
sudo docker run -p 4000:4000 $(sudo docker build -q .)
```

[DockerHub](https://hub.docker.com/repository/docker/jonbri/server/general)

Image management:
```sh
# login
echo "your-password-here" | sudo docker login --username jonbri --password-stdin

# build image
sudo docker build -t jonbri/server .

# run image
sudo docker run -p 4000:4000 jonbri/server:0.0.1

# push
sudo docker push jonbri/server
```

