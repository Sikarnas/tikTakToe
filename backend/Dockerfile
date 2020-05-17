FROM node:14.2.0-stretch-slim
WORKDIR /backend
COPY package.json /backend
RUN npm install
COPY . /backend
CMD ["npm", "start"]