# Build container
FROM node:20-alpine AS builder
WORKDIR /app

# Make sure we got brotli
RUN apk update
RUN apk add --upgrade brotli

# NPM install and build
ADD package.json .
RUN npm install
ADD . .
RUN npm run build

RUN cd /app/dist && find . -type f -exec brotli {} \;

# Actual runtime container
FROM alpine
RUN apk add brotli nginx nginx-mod-http-brotli

# Minimal config
COPY nginx/nginx.conf /etc/nginx/http.d/default.conf

# Actual data
COPY --from=builder /app/dist/ecommerce/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80