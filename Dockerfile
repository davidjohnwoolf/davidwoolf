FROM node:10-alpine AS builder
WORKDIR /home/node/app/
COPY package*.json ./
RUN npm install --only-production
COPY dist ./dist
COPY server.js ./
RUN chown -R node:node /home/node/app
USER node

EXPOSE 8080
CMD ["node", "server.js"]
