FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Normalize Angular output path for Nginx regardless of builder folder layout.
RUN mkdir -p /app/nginx-html && \
		if [ -d /app/dist/angular-frontend/browser ]; then \
			cp -r /app/dist/angular-frontend/browser/. /app/nginx-html/; \
		elif [ -d /app/dist/angular-frontend ]; then \
			cp -r /app/dist/angular-frontend/. /app/nginx-html/; \
		elif [ -d /app/dist/browser ]; then \
			cp -r /app/dist/browser/. /app/nginx-html/; \
		else \
			echo "Angular build output not found"; \
			ls -la /app/dist || true; \
			exit 1; \
		fi

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx-html /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]