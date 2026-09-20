(() => {
  'use strict';
  const STORAGE_KEY = 'companion-dashboard-settings-v1';
  const $ = (selector) => document.querySelector(selector);
  const els = {
    setupCard: $('#setup-card'), setupForm: $('#setup-form'), setupBase: $('#setup-base-date'), setupLength: $('#setup-cycle-length'),
    content: $('#app-content'), status: $('#current-status'), detail: $('#status-detail'), day: $('#current-day'), next: $('#next-date'), left: $('#days-left'), configured: $('#configured-length'),
    calendar: $('#calendar-list'), today: $('#today-button'), settingsForm: $('#settings-form'), settingsBase: $('#settings-base-date'), settingsLength: $('#settings-cycle-length'), clear: $('#clear-data')
  };
  const pad = (n) => String(n).padStart(2, '0');
  const parseDate = (value) => { const [y, m, d] = value.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (date, days) => { const result = new Date(date); result.setDate(result.getDate() + days); return result; };
  const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const formatDate = (date) => new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium' }).format(date);
  const load = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch { return null; } };
  const save = (settings) => localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  const settingsValid = (value) => value && /^\d{4}-\d{2}-\d{2}$/.test(value.baseDate) && Number(value.cycleLength) >= 1 && Number(value.cycleLength) <= 60;

  function render() {
    const settings = load();
    const hasSettings = settingsValid(settings);
    els.setupCard.hidden = hasSettings; els.content.hidden = !hasSettings;
    if (!hasSettings) return;
    const base = parseDate(settings.baseDate); const cycle = Number(settings.cycleLength); const today = startOfDay(new Date());
    const elapsed = Math.floor((today - base) / 86400000); const day = ((elapsed % cycle) + cycle) % cycle + 1;
    const cycleStart = addDays(base, Math.floor(elapsed / cycle) * cycle); const next = addDays(cycleStart, cycle);
    const daysLeft = Math.max(0, Math.ceil((next - today) / 86400000));
    els.status.textContent = `Ciclo iniciado el ${formatDate(cycleStart)}`; els.detail.textContent = `Día ${day} de ${cycle} · cálculo estimado, no clínico.`; els.day.textContent = day;
    els.next.textContent = formatDate(next); els.left.textContent = String(daysLeft); els.configured.textContent = `${cycle} días`;
    els.settingsBase.value = settings.baseDate; els.settingsLength.value = cycle;
    els.calendar.innerHTML = '';
    for (let i = 0; i < 6; i += 1) { const start = addDays(next, i * cycle); const item = document.createElement('div'); item.className = 'calendar-item'; item.innerHTML = `<div><strong>Ciclo ${i + 1}</strong><span>Inicio estimado</span></div><strong>${formatDate(start)}</strong>`; els.calendar.appendChild(item); }
  }
  function readForm(base, length) { return { baseDate: base.value, cycleLength: Number(length.value) }; }
  els.setupForm.addEventListener('submit', (event) => { event.preventDefault(); const value = readForm(els.setupBase, els.setupLength); if (settingsValid(value)) { save(value); render(); } });
  els.settingsForm.addEventListener('submit', (event) => { event.preventDefault(); const value = readForm(els.settingsBase, els.settingsLength); if (settingsValid(value)) { save(value); render(); } });
  els.clear.addEventListener('click', () => { if (window.confirm('¿Borrar la configuración guardada en este dispositivo?')) { localStorage.removeItem(STORAGE_KEY); render(); } });
  els.today.addEventListener('click', () => render());
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  render();
})();