FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production
FROM nginx:alpine
COPY --from=node /app/dist/personal-portfolio /usr/share/nginx/html
