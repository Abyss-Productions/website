/**
 * 4206 -> '4 206'. Thin-spaced thousands, so depth readings stay legible at the
 * small sizes the gauge and section headers use.
 */
export function formatMetres(metres: number) {
  return Math.round(metres)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
