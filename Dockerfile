FROM node:12.10.0
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts -g
COPY . ./
CMD ["npm", "start"]
EXPOSE 3000
