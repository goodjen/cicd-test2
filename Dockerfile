FROM node:8
EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./ ./

RUN npm install --silent

# start app
CMD ["npm", "start"]
