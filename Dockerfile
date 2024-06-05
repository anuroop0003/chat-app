FROM node:18-alpine
WORKDIR /app
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=4096
ARG REACT_APP_API_URL
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm i
RUN npm i -g serve
RUN npm run build
CMD ["serve","-s","build"]