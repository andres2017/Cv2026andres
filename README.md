# AVR — Portfolio Ciberseguridad

Portfolio profesional de **Andrés Vargas Robles**  
Ingeniero de Sistemas · Ciberseguridad · Blockchain

**Live:** https://andres2017.github.io/Cv2026andres/

---

## Qué incluye (versión actualizada)

- Diseño terminal / cyber con soporte ES / EN
- Secciones: Hero, About, Skills, Experience, **Projects**, Education, **Descargar CV**, Contact
- Botón WhatsApp funcional
- Contacto con fallback a mailto + opción Formspree
- MatrixRain desactivado en móvil (mejor rendimiento)
- SEO básico (meta + Open Graph)

---

## Cómo desplegar los cambios

```bash
cd frontend
yarn install   # o npm install
yarn build
yarn deploy    # usa gh-pages
```

O desde la raíz del frontend:

```bash
npm run predeploy && npm run deploy
```

---

## Pasos que debes hacer tú (2 minutos)

### 1. Subir tu CV real
Coloca el archivo PDF en:

```
frontend/public/cv-andres-vargas.pdf
```

Luego vuelve a hacer `yarn build` + `yarn deploy`.

### 2. (Opcional) Formulario de contacto real con Formspree
1. Entra a https://formspree.io y crea cuenta gratis
2. Crea un form y copia el ID (ej: `xzbkqjyw`)
3. En `frontend/src/components/sections/ContactSection.jsx` cambia:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_ID_AQUI';
```

Mientras no lo hagas, el formulario abre tu cliente de correo (mailto) como respaldo.

### 3. Verificar email
En `mock.js` el email de contacto está como `andresvargasrobles@gmail.com`.  
Cámbialo si usas otro.

---

## Stack

- React 19 + Craco + Tailwind
- Radix / shadcn-style components
- HashRouter (compatible con GitHub Pages)
- gh-pages para deploy

---

Hecho para el mercado colombiano y trabajo remoto.
