FROM node:18-alpine
RUN addgroup app && adduser -S -G app app
WORKDIR /app
COPY package*.json .
RUN chown -R app:app /app
USER app
RUN npm install
COPY . .
ENV API_URL="https://nexca.vercel.app"
ENV NEXT_PUBLIC_API_URL="https://nexca.vercel.app"
EXPOSE 3000
CMD [ "npm", "run", "dev" ]