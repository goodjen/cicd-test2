FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./ ./
COPY package.json ./
COPY .npmrc ./
RUN npm install --silent


EXPOSE 3000
# start app
CMD ["npm", "start"]
