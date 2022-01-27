# pull official base image
FROM node:lts-alpine as builder
# set working directory
WORKDIR /app

COPY package*.json ./
# Installs all node packages
RUN npm install --legacy-peer-deps

# Copies everything over to Docker environment
COPY . ./
RUN npm run build

# production
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]