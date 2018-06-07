FROM node:8

RUN npm install -g serve
CMD serve -s build

EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./ ./

RUN npm install --silent

# start app
RUN npm run build --production
