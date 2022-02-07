FROM node:14.17.0-alpine
COPY ["./package.json", "./yarn.lock", "/app/"]
WORKDIR /app
RUN yarn
COPY ./ ./
CMD yarn build
