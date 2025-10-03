
# 📱 Proyecto Web Responsive - Menú y Buscador

Este proyecto consiste en una **plantilla HTML, CSS y JavaScript** que implementa un **encabezado fijo con logo, menú lateral desplegable, buscador dinámico y carrito de compras**.  
Está pensado como base para un sitio de productos o e-commerce.

---

## 📂 Estructura de Archivos

```
/proyecto
│── iphone.html     # Página principal con header, buscador y menú
│── styles.css      # Estilos principales del sitio
│── script.js       # Lógica de interacción con menú y buscador
│── /assets         # Imágenes y SVGs usados en botones y navegación
```

---

## 📄 iphone.html

Archivo principal en **HTML5**:

- **Header fijo (`.site-header`)** con logo, menú, buscador y carrito.  
- **Menú lateral (`.nav`)** con enlaces y submenús desplegables.  
- **Buscador (`.search-bar`)** que se despliega al presionar el ícono de búsqueda.  
- Carga de `script.js` para manejar la lógica.  

---

## 🎨 styles.css

Archivo de estilos con:

- Variables de colores (`:root`) para paleta (oscuro, blanco, ámbar).  
- **Header sticky** con `box-shadow` iluminado.  
- **Menú lateral (`.nav`)** animado con `opacity` y `pointer-events`.  
- **Overlay (`.overlay`)** que oscurece el fondo al desplegar el menú.  
- **Buscador (`.search-bar`)** con animación en `max-height` y estilos para `input[type=text]`.  

Ejemplo de personalización del buscador:

```css
.search-bar input {
  width: 70%;
  border-radius: 10px;
  padding: 0.5rem;
  border: 1px solid var(--color-light);
  background: var(--color-dark);
  color: var(--color-white);
}
```

---

## ⚙️ script.js

Archivo JavaScript encargado de:

1. **Menú desplegable**  
   - Abre/cierra al presionar el botón `.button__menu`.  
   - Submenús se expanden con animación en altura.  
   - Se usa `.overlay` para cerrar el menú al hacer clic fuera.

2. **Buscador**  
   - Se despliega con `.button__search`.  
   - Filtra elementos en vivo escribiendo en `#searchInput`.  
   - Dos funciones de filtrado: una para `.button_search` y otra para `.button_carShop`.  

Ejemplo de evento del buscador:

```js
searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('show');
});
```

---

## 🚀 Mejoras Sugeridas

- Ajustar `z-index` del buscador para que no interfiera con el `box-shadow` del header.  
- Optimizar el filtro en vivo para trabajar sobre una sola clase común en lugar de dos duplicadas.  
- Hacer la plantilla **responsive completa** con media queries.  
- Integrar productos dinámicamente desde una base de datos o JSON.

---

## 📌 Uso

1. Abre `iphone.html` en el navegador.  
2. Usa el ícono ☰ para abrir el menú lateral.  
3. Presiona 🔍 para desplegar el buscador.  
4. Escribe en el campo para filtrar elementos visibles.  

---

✍️ Autor: yo
