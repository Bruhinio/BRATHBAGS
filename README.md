# BrathBags — Gate / Countdown

Pantalla única de "próximo drop" con countdown en vivo. Sitio 100% estático (HTML/CSS/JS puro), sin dependencias — funciona directo en cualquier hosting estático.

Las imágenes (logo y fondo) van embebidas directo en el HTML/CSS en formato base64, así que no hay carpeta `assets/` ni rutas de imagen que puedan romperse al subir a GitHub o desplegar en Vercel.

## Archivos
- `index.html` — pantalla del gate/countdown
- `proximamente.html` — página negra "PRÓXIMAMENTE............" a la que llevan los botones ENTRAR, OBTENER ACCESO ANTICIPADO y la X
- `styles.css` — estilos
- `script.js` — lógica del countdown y navegación de los botones

## Cambiar la fecha del drop
Abre `script.js` y edita la primera línea:
```js
const DROP_DATE=new Date("2026-10-09T20:00:00-06:00");
```

## Subir a GitHub
```bash
git init
git add .
git commit -m "BrathBags gate screen"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## Desplegar en Vercel
1. Entra a https://vercel.com/new
2. Importa el repositorio de GitHub que acabas de crear
3. Framework Preset: **Other** (es HTML estático, no necesita build command ni output directory)
4. Click **Deploy**

Listo — Vercel te da una URL tipo `tu-proyecto.vercel.app` en menos de un minuto.
