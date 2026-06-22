# Spotify Clone

Una aplicación web de streaming de música construida con Angular y Node.js.

## 📋 Descripción del Proyecto

Este proyecto es un clon de Spotify que consiste en:

- **Frontend**: Aplicación Angular 16 para la interfaz de usuario
- **Backend**: API REST con Node.js, Express y MongoDB
- **Autenticación**: Sistema de autenticación con JWT y Passport
- **Funcionalidades**: Reproducción de música, gestión de usuarios, y más

## 🏗️ Arquitectura

```
SPOTIFY/
├── angular-spotify-master/     # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   └── package.json
│
└── node-api-spotify-master/   # Backend Node.js
    ├── app/
    │   ├── controllers/
    │   ├── helpers/
    │   └── middleware/
    ├── config/
    ├── public/
    └── package.json
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

### Backend (Node.js API)

1. Navegar al directorio del backend:
```bash
cd node-api-spotify-master
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno en el archivo `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/spotify
JWT_SECRET=your_secret_key
```

4. Iniciar el servidor:
```bash
npm start
```

El backend estará disponible en `http://localhost:3000`

### Frontend (Angular)

1. Navegar al directorio del frontend:
```bash
cd angular-spotify-master
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar el entorno en `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

4. Iniciar el servidor de desarrollo:
```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 📦 Tecnologías Utilizadas

### Frontend
- **Angular 16**: Framework de JavaScript
- **RxJS**: Programación reactiva
- **ngx-cookie-service**: Gestión de cookies

### Backend
- **Node.js**: Runtime de JavaScript
- **Express**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **JWT**: Autenticación con tokens
- **Passport**: Middleware de autenticación
- **bcryptjs**: Encriptación de contraseñas
- **CORS**: Cross-Origin Resource Sharing

## 🔧 Scripts Disponibles

### Backend
```bash
npm start          # Inicia el servidor
```

### Frontend
```bash
ng serve           # Inicia el servidor de desarrollo
ng build           # Construye el proyecto para producción
ng test            # Ejecuta pruebas unitarias
ng e2e             # Ejecuta pruebas end-to-end
```

## 📁 Estructura del Proyecto

### Backend
- `app.js`: Punto de entrada de la aplicación
- `app/controllers/`: Controladores de la API
- `app/helpers/`: Funciones auxiliares
- `app/middleware/`: Middleware personalizados
- `config/`: Configuración de la aplicación
- `public/`: Archivos estáticos (tracks de audio)

### Frontend
- `src/app/`: Componentes y módulos de Angular
- `src/assets/`: Recursos estáticos
- `src/environments/`: Configuración de entornos

## 🔐 Autenticación

El sistema utiliza JWT (JSON Web Tokens) para la autenticación:
- Registro de usuarios
- Login con email y contraseña
- Tokens JWT para sesiones seguras
- Middleware de autenticación en rutas protegidas

## 🎵 Funcionalidades

- Reproducción de música
- Gestión de biblioteca personal
- Sistema de autenticación de usuarios
- API RESTful para el backend
- Interfaz responsive con Angular

## 🌐 Despliegue en Producción

### URL del Proyecto
- **Producción**: https://spotify-8qt0.onrender.com/

### Plataforma de Despliegue
El proyecto está desplegado en **Render**, una plataforma de cloud computing que proporciona:

- **Backend**: Node.js/Express con MongoDB Atlas
- **Frontend**: Angular build servido estáticamente desde el backend
- **Base de Datos**: MongoDB Atlas (base de datos en la nube)
- **HTTPS**: Certificado SSL automático

### Configuración de Despliegue

1. **Backend Node.js**:
   - El servidor Express sirve tanto la API REST como el build de Angular
   - Configurado para servir archivos estáticos desde `dist/spotify`
   - Variables de entorno configuradas en Render para MongoDB y JWT

2. **Frontend Angular**:
   - Build de producción generado con `ng build --configuration production`
   - Archivos servidos estáticamente desde el backend
   - URLs de tracks configuradas para funcionar con el dominio de producción

3. **Base de Datos**:
   - MongoDB Atlas para almacenamiento en la nube
   - Configuración de conexión mediante variables de entorno

### Flujo de Despliegue

1. Hacer build del frontend Angular:
```bash
cd angular-spotify-master
ng build --configuration production
```

2. Subir cambios al repositorio Git

3. Render detecta los cambios y hace el despliegue automático

4. El build de Angular se sirve desde el backend Node.js

## 📝 Notas

- Asegúrate de tener MongoDB ejecutándose antes de iniciar el backend localmente
- Configura correctamente las variables de entorno
- El frontend necesita que el backend esté corriendo para funcionar correctamente
- En producción, el backend sirve tanto la API como el frontend Angular

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier mejora.

## 📄 Licencia

Este proyecto es para fines educativos.
