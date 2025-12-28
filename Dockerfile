# Step 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app

# Accept the API key as a build argument
ARG VITE_GEMINI_API_KEY

COPY package*.json ./
RUN npm install

# Create the .env.local file and inject the key
RUN echo "VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY" > .env.local

COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the build files from the first step
COPY --from=build /app/dist /usr/share/nginx/html
# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
