FROM node:19.8-alpine3.16
WORKDIR /app
COPY yarn.lock yarn.lock
RUN yarn install --forzen-lockfile
COPY . .
ENTRYPOINT ["yarn"] 
CMD ["run", "start"]