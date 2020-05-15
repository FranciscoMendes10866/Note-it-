FROM node:12.16-alpine3.11
WORKDIR usr/src/app
COPY package.json .
RUN yarn
COPY . .
CMD ["yarn", "serve"]