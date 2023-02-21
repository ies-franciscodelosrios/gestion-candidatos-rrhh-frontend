FROM nginx:1.23-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/proyecto-final-rh /usr/share/nginx/html
COPY server.crt /etc/ssl/certs/
COPY server.key /etc/ssl/private/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

