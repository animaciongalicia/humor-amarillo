// Packs de ejemplo. Precios "desde" por persona, según temporada y menú.
// Origen: PDF Coruña 2026 (salvo el nº 2, calculado: 42 € + 50 € de cena y fiesta).
export interface Pack { name: string; includes: string[]; from: number; featured?: boolean; note?: string }

export const packs: Pack[] = [
  { name: 'Solo Humor Amarillo', from: 42, includes: ['Circuito Gakushi-Kai, 11 pruebas', 'Una consumición por persona', 'Disfraz para el homenajeado o la homenajeada'] },
  { name: 'Humor Amarillo + cena y fiesta', from: 92, featured: true, includes: ['Humor Amarillo', 'Cena baile y fiesta en Los 7 PC'] },
  { name: 'Pack Karts y fiesta', from: 119, includes: ['Karts', 'Hotel', 'Cena y fiesta'] },
  { name: 'Pack Cena y gymkana', from: 80, includes: ['Cena conjunta', 'Gymkana'] },
  { name: 'Pack Cena y show', from: 109, includes: ['Cena', 'Show', 'Alojamiento'] },
  { name: 'Pack del Mar', from: 120, includes: ['Barco medio día o motos de agua', 'Alojamiento', 'Cena conjunta'] },
  { name: 'Pack Aventura', from: 120, includes: ['Karts o rafting', 'Alojamiento', 'Cena conjunta'] },
  { name: 'Pack Disparando', from: 80, includes: ['Láser tag o paintball', 'Cena conjunta'] },
];
