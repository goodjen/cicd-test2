FROM node:8
RUN npm install --silent


EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./ ./

# start app
CMD ["npm", "start"]
