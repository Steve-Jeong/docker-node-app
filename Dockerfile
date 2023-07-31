FROM node:20.2-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN chown -R node:node /app
USER node
CMD [ "npm", "run", "dev" ]
