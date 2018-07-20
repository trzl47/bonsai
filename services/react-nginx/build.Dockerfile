# docker.nginx

FROM nginx:alpine

COPY ./build/client /client
COPY ./build/server /server
COPY nginx.conf /etc/nginx/nginx.conf
