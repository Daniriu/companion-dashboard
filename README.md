# Companion Dashboard

PWA neutral y privada a nivel de datos para GitHub Pages. No contiene nombres, fechas personales, mensajes privados ni datos de terceros.

## Privacidad

La fecha base y la duración del ciclo se solicitan en el primer uso y se guardan únicamente en `localStorage` del navegador. No hay cuentas, servidor, analítica, API ni sincronización. El código del repositorio contiene solo valores genéricos.

`localStorage` no equivale a cifrado: cualquier persona con acceso al dispositivo y al navegador podría leer esos datos. Usa la opción **Borrar todos los datos locales** cuando quieras eliminarlos.

## Publicar con GitHub Pages

1. En GitHub, abre **Settings → Pages**.
2. Selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique el sitio.

La aplicación no necesita un proceso de compilación. Los archivos estáticos deben servirse por HTTPS para que el service worker funcione.

## Instalar en iPhone

1. Abre la URL publicada en Safari.
2. Pulsa **Compartir**.
3. Selecciona **Agregar a pantalla de inicio**.
4. Confirma con **Agregar**.

## Uso

- En el primer uso, introduce la fecha base y la duración del ciclo.
- Edita ambos valores desde **Configuración**.
- El calendario es estimado y se calcula localmente.
- Usa **Borrar todos los datos locales** para reiniciar la app.

## Archivos

- `index.html`: interfaz y estructura.
- `styles.css`: estilos adaptables a móvil.
- `app.js`: lógica, calendario y almacenamiento local.
- `manifest.webmanifest`: metadatos de instalación.
- `sw.js`: caché básica para funcionamiento tipo PWA.

## Alcance

Este proyecto es una herramienta de organización y no proporciona diagnóstico, tratamiento ni consejo médico.