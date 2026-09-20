# Companion Dashboard

Corrección robusta de la PWA para evitar el error de referencia nula y asegurar que el calendario cargue.

## Corrección v7

- Se creó `app-v7.js` con nombre nuevo para evitar caché del script anterior.
- Se eliminó la referencia problemática `els.length`.
- Se usa `configured-length` mediante referencia directa validada.
- El calendario se renderiza en una función independiente.
- Se actualizó el service worker a `v7`.
- Se conservan ovulación estimada, Estrellita de Mario, fase lútea y ventana premenstrual.

## Privacidad

La configuración se guarda únicamente en `localStorage`. No hay cuentas, servidor, analítica ni sincronización. Las fechas y fases son estimaciones; no representan consentimiento ni predicción de conducta.