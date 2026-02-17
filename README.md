# test-render

A simple "Hello World" web application that displays "Hi Erik!!" - ready to deploy on Render.

## Features
- Single page web application
- Clean, responsive design with gradient background
- Simple Express.js server
- Ready for deployment on Render

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Visit `http://localhost:3000` in your browser

## Deployment on Render

This application includes a `render.yaml` configuration file for easy deployment on Render.

### Option 1: Deploy via Render Dashboard
1. Log in to your Render account
2. Click "New +" and select "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

### Option 2: Deploy as Web Service
1. Log in to your Render account
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Create Web Service"

The application will be live at your Render URL!