# Usar una imagen base de Node
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar los archivos de la fuente
COPY . .

# Exponer el puerto en el que se ejecutará tu aplicación
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["node", "index.js"]
