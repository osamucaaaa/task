FROM node:lts-alpine as task-angular-ionic
# ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules /app
COPY . .
EXPOSE 8100
# RUN chown -R node /usr/src/app
RUN npm run build
USER node
CMD ["npm", "start", "serve"]
