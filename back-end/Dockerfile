FROM node:19-alpine3.16
WORKDIR /app
COPY package*.json ./app
RUN yarn install
COPY . /app
EXPOSE 3000
CMD ["yarn","start"]