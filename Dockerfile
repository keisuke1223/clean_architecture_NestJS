FROM node:17.4-alpine as builder
WORKDIR /build
COPY *json src/ ./
RUN npm ci && \
    npm run build

FROM node:17.4-alpine
WORKDIR /api
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
