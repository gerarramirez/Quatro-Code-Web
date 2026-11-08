# Quatro Code Web

Sitio web de Quatro Code. Es estático: HTML, CSS y un poco de JavaScript, sin frameworks ni proceso de build. Casi no consume memoria en el servidor porque no ejecuta código del lado del servidor.

## Estructura

- `index.html`: contenido de todas las secciones
- `styles.css`: diseño y colores (variables al inicio)
- `script.js`: interacción del logo y el equipo
- `assets/logo.svg`: logo (Q con cuatro puntos, uno por fundador)

## Cómo llenar el contenido

- **Historia, misión, visión, valores:** edita las secciones `#historia` y `#mision-vision`. Los textos actuales son borradores.
- **Clientes:** reemplaza el recuadro de `#clientes` por una lista de clientes o proyectos.
- **Redes sociales:** en `#contacto`, cambia `href="#contacto"` por la URL real y borra el atributo `data-pending` de cada enlace.
- **Equipo:** agrega el cargo de cada fundador en lugar de "Fundador".

## Publicar con poca memoria

Cualquiera de estas opciones sirve archivos estáticos:

1. GitHub Pages o Cloudflare Pages: gratis y sin servidor propio.
2. Nginx en un VPS pequeño: usa unos pocos MB de RAM. Con Docker:

```
docker build -t quatro-code-web .
docker run -d -p 80:80 quatro-code-web
```

## Probar en local

```
python3 -m http.server 8000
```

Abre http://localhost:8000
