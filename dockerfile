# =========================
# STAGE 1: Build do Frontend
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copia o restante do frontend
COPY frontend/ .

# Gera build de produção
RUN npm run build

# =========================
# STAGE 2: Runtime com Nginx
# =========================
FROM nginx:alpine

# Remove configuração default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build gerado
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run define a porta via variável PORT
EXPOSE 8080

# Mantém o Nginx rodando em foreground
CMD ["nginx", "-g", "daemon off;"]