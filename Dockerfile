# ----------------------------
# 1) Build Stage
# ----------------------------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Add homepage ONLY for asset paths
RUN apk add --no-cache jq && \
    jq '. + {homepage: "/ui"}' package.json > temp.json && \
    mv temp.json package.json

RUN npm ci

COPY . .

RUN npm run build

# ----------------------------
# 2) Serve build with static server
# ----------------------------
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
