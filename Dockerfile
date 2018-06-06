FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY .npmrc ./
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000
# start app
CMD ["npm", "start"]
