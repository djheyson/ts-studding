FROM node:22.13.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g ts-node

CMD ["npx", "nodemon", "--exec", "ts-node", "src/index.ts"]
