FROM node:14.2.0-stretch-slim
WORKDIR /frontend
COPY package.json /frontend
RUN npm install
COPY . /frontend
CMD ["npm", "start"]