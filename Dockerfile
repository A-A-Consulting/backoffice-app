FROM node:gallium-alpine3.15 as builder
RUN apk add curl
WORKDIR /app 

# Copy app files
COPY . .

ENV PORT=3101
ENV API_DEFAULT_URL=http://api-service-amichelena:3100

#install only production dependencies
RUN npm ci

# Build the app
RUN npm run build



# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3102

# Start nginx
CMD ["nginx", "-g", "daemon off;"]