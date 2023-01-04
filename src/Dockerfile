# Start node container
FROM node:16.18.0

#Specify the working directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
COPY tsconfig*.json /app/
COPY ../dist /app/

#Install the dependencies
RUN npm install
RUN npm run build


#Expose port 4000
EXPOSE 4000

CMD ["node", "dist/main"]