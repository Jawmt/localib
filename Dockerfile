FROM node
WORKDIR /app
COPY package*.json .
RUN NPM INSTALL
COPY . .
EXPOSE 3000
CMD ["npm", "start"]