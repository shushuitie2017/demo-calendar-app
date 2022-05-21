FROM node:14.17.5

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

RUN yarn add react-router-dom
WORKDIR /usr/src/app