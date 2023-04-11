FROM node:18.14.2-alpine
WORKDIR /usr/app/src/components
COPY ["./app/package.json", "./"]
RUN npm install
COPY . .