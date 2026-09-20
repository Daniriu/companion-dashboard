# Companion Dashboard

Corrección de la PWA para reparar el renderizado de estadísticas y calendario.

## Correcciones

- Se usa el elemento correcto `configured-length` para la duración del ciclo.
- Se validan las referencias antes de renderizar.
- Se actualiza el JavaScript a `v6`.
- El service worker usa caché `v6`.
- Se conserva el calendario de ovulación, Estrellita de Mario, fase lútea, ventana premenstrual y siguiente ciclo.

## Privacidad

La información se guarda únicamente en `localStorage`. No hay cuentas, servidor, analítica ni sincronización. Las fases y fechas son estimaciones de calendario; no son diagnóstico, consentimiento ni predicción de conducta.