# Companion Dashboard

Versión v8 de recuperación de la PWA.

## Correcciones

- Todas las referencias DOM se validan antes de usarse.
- Se eliminó el acceso a `els.length` y otras propiedades inexistentes.
- El calendario se renderiza independientemente.
- Se añadió `app-v8.js` para evitar caché del script anterior.
- Se actualizó el service worker a v8.

## Privacidad

La configuración permanece en `localStorage`. No hay cuentas, servidor, analítica ni sincronización. Las fechas y fases son estimaciones y no representan consentimiento ni predicción de conducta.

## Recuperación

Abre la URL con `?v=8` en Safari normal. Si la aplicación conserva una versión previa, elimina el icono antiguo y vuelve a instalarla después de verificar la versión nueva.