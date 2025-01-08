# Step 1: Build the React app
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /picture-matching

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app with a lightweight web server (nginx)
FROM nginx:alpine

# Copy the build folder from the build step
COPY --from=build /picture-matching/build /usr/share/nginx/html

# Expose port 80 to access the app in the browser
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
