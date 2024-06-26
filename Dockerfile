FROM node:20.11.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080