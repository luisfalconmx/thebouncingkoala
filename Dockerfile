# --- Dockerfile optimize for production --- #

# Build project
FROM node:14.17.0-alpine as build
COPY ["./package.json", "./yarn.lock", "/home/node/app/"]
WORKDIR /home/node/app
RUN yarn
COPY [".", "./"]
RUN yarn run build

# Copy dist folder to nginx folder
FROM nginx:1.19.10-alpine
COPY --from=build /home/node/app/dist /usr/share/nginx/html