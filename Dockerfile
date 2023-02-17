# build environment
FROM node:16.13-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm ci --only=production --silent
RUN npm run build --silent