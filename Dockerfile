FROM node:17-alpine

WORKDIR /api
COPY package*.json ./
RUN npm ci
