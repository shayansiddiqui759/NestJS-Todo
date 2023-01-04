# Start node container
FROM node:16.18.0 as development

#Specify the working directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
COPY tsconfig*.json /app/

#Install the dependencies
RUN npm install

RUN npm run build

#Expose port 4000
EXPOSE 4000