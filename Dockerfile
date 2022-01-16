# --- Dockerfile optimize for production --- #

# Build Project
FROM node:14.17.0-alpine as build
COPY ["./package.json", "./yarn.lock", "/app/"]
WORKDIR /app
RUN yarn
COPY ./ ./
RUN yarn build

# Copy dist folder to nginx folder
FROM nginx:1.19.10-alpine
RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /app
EXPOSE 80
CMD ["nginx"]