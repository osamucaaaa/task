FROM node:lts-alpine as task-angular-ionic
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 3000