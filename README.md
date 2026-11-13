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
- **Logos de lenguajes:** están en `assets/tech/` y vienen del conjunto comunitario Devicon (licencia MIT del repositorio), no de las páginas oficiales de cada marca. Los logos siguen siendo marcas de sus dueños. Antes de usar la web de forma comercial, revisa las guías de marca de cada uno (Java/Oracle es la más estricta) o quita el que no quieras: basta con borrar su `<img>` en `#lenguajes`.
- **Versiones anteriores (una rama por versión):** `quatro-code-b1` (primera versión, Quatro Code), `kuatro-digital` (nueva marca), `kuatro-digital-v2` (rediseño con hero oscuro) `kuatro-digital-v3` (servicios y tecnologías genéricas) y `kuatro-digital-v4` (logos, nube y equipo). Los cambios grandes van siempre en una rama nueva.
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
