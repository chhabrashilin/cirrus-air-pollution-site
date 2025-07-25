# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY site/ ./site

# ---- production stage ----
FROM nginx:1.27-alpine
COPY --from=build /app/site /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost || exit 1
