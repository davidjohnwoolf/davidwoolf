FROM node:10-alpine AS builder
WORKDIR /home/node/app/
COPY package*.json ./
RUN npm install --only-production \
	&& cp -R node_modules prod_node_modules \
	&& npm install
COPY . .
RUN npm run build
COPY dist dist

FROM node:10-alpine AS build
COPY package*.json ./
COPY --from=builder /home/node/app/server.js ./
COPY --from=builder /home/node/app/dist/ ./dist
COPY --from=builder /home/node/app/prod_node_modules ./node_modules

EXPOSE 8080
CMD ["node", "server.js"]