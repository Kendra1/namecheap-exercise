FROM node:18-bullseye

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production --silent

COPY . .
RUN yarn build

EXPOSE 3000
ENV IMAGES_BASE_PATH https://image.tmdb.org/t/p/w500/
CMD ["yarn", "start"]