# Deploying to cPanel

This guide will help you deploy your Next.js application to a cPanel hosting environment.

## Prerequisites

- A cPanel hosting account with:
  - Node.js support (version 14+ recommended)
  - SSH access
  - Ability to run Node.js applications

## Deployment Steps

### Method 1: Using the Deployment Script

1. **Build and prepare the deployment package**:
   ```bash
   ./deploy-cpanel.sh
   ```
   This will create a file called `aliatish-deployment.zip`.

2. **Upload the zip file to your cPanel account**:
   - Log in to your cPanel account
   - Navigate to File Manager
   - Go to your domain's root directory (usually `public_html`)
   - Upload the zip file and extract it

3. **Install dependencies and start the application**:
   - Connect to your server via SSH
   ```bash
   ssh username@yourdomain.com
   ```
   - Navigate to your site directory
   ```bash
   cd public_html
   ```
   - Install production dependencies
   ```bash
   npm install --production
   ```
   - Start the application using PM2
   ```bash
   npm install -g pm2
   pm2 start ecosystem.config.js
   ```
   - Make PM2 start on server reboot
   ```bash
   pm2 startup
   pm2 save
   ```

### Method 2: Using cPanel's Node.js App Setup

1. **Build your application locally**:
   ```bash
   npm run build
   ```

2. **Upload your files to cPanel**:
   - Upload all files to a directory in your cPanel account
   - Make sure to include:
     - `.next` directory
     - `public` directory
     - `package.json`
     - `server.js`
     - `.htaccess`

3. **Set up the application in cPanel**:
   - In cPanel, navigate to "Setup Node.js App"
   - Create a new application:
     - Set the Node.js version (14+ recommended)
     - Application mode: Production
     - Application root: Path to your uploaded files
     - Application URL: Your domain or subdomain
     - Application startup file: `server.js`
     - Environment variables: Add `NODE_ENV=production`
   - Click "Create"

## Configuration Files

This repository includes several files important for cPanel deployment:

- **server.js**: Custom server for running Next.js
- **.cpanel.yml**: Deployment configuration for cPanel Git integration
- **.htaccess**: Apache configuration for URL rewriting and caching
- **ecosystem.config.js**: PM2 process manager configuration
- **deploy-cpanel.sh**: Helper script to create deployment package

## Troubleshooting

### Application Error 500
- Check the error logs in cPanel (Error Log)
- Ensure Node.js is properly installed and the version is compatible
- Verify file permissions (server.js should be executable)

### Missing Pages or Assets
- Ensure all static files are properly copied to public_html
- Check .htaccess configuration for proper routing

### Application Crashes
- Check your application logs via SSH:
```bash
pm2 logs
```
- Increase memory limit in ecosystem.config.js if necessary
- Make sure all dependencies are installed correctly

## Monitoring

You can monitor your application using PM2:

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Monitor in real-time
pm2 monit
```

## Updating Your Application

To update your application:

1. Make changes locally and test
2. Build the application
3. Create a new deployment package and upload
4. Via SSH, restart your application:
```bash
cd public_html
pm2 reload all
``` 