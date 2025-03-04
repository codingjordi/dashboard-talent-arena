# Dashboard for Talent Arena 2025 - MWC Barcelona

Este proyecto es un dashboard desarrollado para Talent Arena 2025 en el MWC Barcelona. Está construido utilizando Astro, una moderna herramienta de construcción de sitios estáticos, y está desplegado en Netlify. Además, utiliza Bun como gestor de paquetes y entorno de ejecución. El desarrollo se ha realizado en Arch Linux.

## 🚀 Estructura del Proyecto

```plaintext
.
├── astro.config.mjs
├── bun.lock
├── components.json
├── LICENSE
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
├── README.md
├── src
│   ├── assets
│   ├── components
│   ├── icons
│   ├── layouts
│   ├── lib
│   ├── pages
│   └── styles
└── tsconfig.json

10 directories, 14 files
```

## 📚 Librerías

- [Animaciones](https://magicui.design/docs/components/globe)
- [Landing](https://flowbite.com/docs/getting-started/astro/)
- [Gráficas](https://www.tradingview.com/lightweight-charts/)

## 🛠️ Tecnologías Utilizadas

### Astro

Astro es una moderna herramienta de construcción de sitios estáticos que permite crear sitios web rápidos y optimizados. Utiliza una arquitectura basada en componentes y soporta múltiples frameworks de frontend como React, Vue y Svelte.

### Netlify

El proyecto está desplegado en Netlify, una plataforma de despliegue y alojamiento de sitios web estáticos y aplicaciones modernas. Netlify ofrece un flujo de trabajo continuo de integración y despliegue (CI/CD) que facilita el despliegue automático de cambios en el código.

### Bun

Bun es un gestor de paquetes y entorno de ejecución rápido y moderno. Se utiliza en este proyecto para gestionar las dependencias y ejecutar scripts de desarrollo y construcción.

## 🌐 Despliegue

El proyecto está desplegado en Netlify y se actualiza automáticamente con cada cambio en el repositorio. Puedes acceder al dashboard en la siguiente URL:

[Dashboard Talent Arena 2025](https://your-netlify-deployment-url.netlify.app)

## 💻 Instalación y Uso

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/jramma/dashboard.git
   cd dashboard
   ```

2. Instala las dependencias utilizando Bun:
   ```sh
   bun install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   bun run dev
   ```

4. Abre tu navegador y navega a `http://localhost:3000` para ver el dashboard en acción.

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

## Web demo:
https://talentarena.netlify.app/home/