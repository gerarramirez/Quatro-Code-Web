# Kuatro Digital Web

Sitio web de Kuatro Digital. Es estático: HTML, CSS y un poco de JavaScript, sin frameworks ni proceso de build. Casi no consume memoria en el servidor porque no ejecuta código del lado del servidor.

## Estructura

- `index.html`: contenido de todas las secciones
- `styles.css`: diseño y colores (variables al inicio)
- `script.js`: interacción del logo y el equipo
- `assets/logo.svg`: logo a color (cuatro bloques, uno por socio)
- `assets/logo-una-tinta.svg`: logo de un solo color, para bordado e impresión
- `assets/icono-base-de-datos.svg`: ícono genérico de base de datos

## Cómo llenar el contenido

- **Historia, misión, visión, valores:** edita las secciones `#historia` y `#mision-vision`. Los textos actuales son borradores.
- **Logos de lenguajes (Java, .NET, Python, JavaScript):** hoy se muestran como etiquetas de texto. Para agregar los logos, descarga cada uno desde la página oficial de marca de su dueño, respeta sus guías de uso, guárdalos en `assets/tech/` y ponlos dentro de cada etiqueta de `#lenguajes` en `index.html`.
- **Versión anterior:** la primera versión de la web (Quatro Code) quedó guardada en la rama `quatro-code-b1`.
- **Clientes:** reemplaza el recuadro de `#clientes` por una lista de clientes o proyectos.
- **Redes sociales:** en `#contacto`, cambia `href="#contacto"` por la URL real y borra el atributo `data-pending` de cada enlace.
- **Equipo:** agrega el cargo de cada fundador en lugar de "Fundador".

## Publicar con poca memoria

Cualquiera de estas opciones sirve archivos estáticos:

1. GitHub Pages o Cloudflare Pages: gratis y sin servidor propio.
2. Nginx en un VPS pequeño: usa unos pocos MB de RAM. Con Docker:

```
docker build -t kuatro-digital-web .
docker run -d -p 80:80 kuatro-digital-web
```

## Probar en local

```
python3 -m http.server 8000
```

Abre http://localhost:8000
