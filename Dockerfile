FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /app/dist/personal-portfolio /usr/share/nginx/html