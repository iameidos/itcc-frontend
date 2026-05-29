FROM node:lts

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
RUN npm install
# build app for production with minification
RUN npm run build


EXPOSE 3000
# Run the Vite preview command
CMD ["npm", "start"]