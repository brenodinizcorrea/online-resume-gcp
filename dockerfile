# =========================
# 1️⃣ STAGE DE BUILD
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copia o resto do frontend
COPY frontend/ .

# Gera build de produção
RUN npm run build

# =========================
# 2️⃣ STAGE DE RUNTIME
# =========================
FROM nginx:alpine

# Remove config default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Config nginx para SPA + Cloud Run
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build gerado
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run usa 8080
EXPOSE 8080

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]