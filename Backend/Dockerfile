FROM linuxserver/libreoffice:25.8.1
 
ENV NODE_VERSION=22.22.2

RUN apk add --no-cache curl libstdc++ && \
    curl -fsSL https://unofficial-builds.nodejs.org/download/release/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64-musl.tar.gz | \
    tar -xz -C /usr/local --strip-components=1 && \
    node --version && npm --version
 
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["with-contenv", "npm", "run", "start:server"]