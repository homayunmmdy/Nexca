FROM node:alpine3.20
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL="https://nexca.vercel.app"
ENV NEXT_PUBLIC_API_URL="https://nexca.vercel.app"