# Companion Dashboard

Versión v10 con renderizado defensivo y calendario futuro.

## Correcciones

- Todas las referencias DOM se comprueban antes de usarse.
- Se eliminó el acceso obligatorio a `els.cycleLength`.
- La duración se muestra con el elemento `configured-length` cuando existe.
- El calendario se construye de forma independiente.
- Se cargan fechas futuras de ovulación y Estrellita.
- Service worker actualizado a v10.

## Privacidad

La configuración se guarda únicamente en `localStorage`. No hay cuentas, servidor, analítica ni sincronización. Las fechas son estimaciones de calendario y no representan consentimiento ni predicción de conducta.

## Recuperación

Abre la URL con `?v=10` en Safari normal. Si ves una versión anterior, elimina el icono instalado y vuelve a agregarlo después de verificar la versión nueva.