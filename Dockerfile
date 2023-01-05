# Start node container
FROM node:gallium-alpine3.16

# Specify the working directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
COPY tsconfig*.json /app/

# Install the dependencies
RUN npm install
RUN npm run build


COPY ./dist /app/
COPY ./config /app/config

#Expose port 4000
EXPOSE 3000

CMD ["node", "dist/main"]