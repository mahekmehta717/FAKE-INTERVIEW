# Use official lightweight Alpine-based Nginx image
FROM nginx:1.27-alpine

# Copy custom nginx configuration for clean routing & security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy web application assets
COPY . /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check to ensure web server is responding
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
