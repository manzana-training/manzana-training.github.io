export type PositionRef = {
  name: string
  blockName: string
  postSlug: string | null
  shortFrame: string
}

export const POSITION_BY_T: Record<string, PositionRef> = {
  T1: {
    name: 'Decidir sin información completa',
    blockName: 'Decisión',
    postSlug: 'decidir-sin-informacion-completa',
    shortFrame: 'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor.',
  },
  T2: {
    name: 'Cerrar sin aplausos',
    blockName: 'Cierre',
    postSlug: null,
    shortFrame: 'Alguien tiene que cerrar. Buscar aprobación no es liderar.',
  },
  T3: {
    name: 'Aguantar el plan',
    blockName: 'Cierre',
    postSlug: 'aguantar-el-plan',
    shortFrame: 'La decisión es correcta. El reloj corre. No cambies por ansiedad.',
  },
  T4: {
    name: 'Cerrar sin aplausos',
    blockName: 'Cierre',
    postSlug: null,
    shortFrame: 'Sostener una decisión impopular sin buscar consenso infinito.',
  },
  T5: {
    name: 'Resistencia pasiva',
    blockName: 'Fricción',
    postSlug: 'resistencia-pasiva-el-enemigo-invisible',
    shortFrame: 'Nadie te dice no, pero nada se mueve. Exponer la fricción que no hace ruido.',
  },
  T6: {
    name: 'Romper el monopolio',
    blockName: 'Opacidad',
    postSlug: 'romper-el-monopolio',
    shortFrame: 'Influir sin autoridad formal exige redistribuir información y foros.',
  },
  T7: {
    name: 'Decir no al dinero',
    blockName: 'Supervivencia',
    postSlug: 'decir-no-al-dinero',
    shortFrame: 'Decir la verdad cruda sin perder a la gente clave ni prometer futuro abstracto.',
  },
  T8: {
    name: 'Cortar la infección',
    blockName: 'Contaminación',
    postSlug: 'cortar-la-infeccion',
    shortFrame: 'El conflicto entre partes que no se corta contamina más que diez desmotivados.',
  },
  T9: {
    name: 'Liderar sin estar seguro',
    blockName: 'Liderazgo',
    postSlug: 'liderar-sin-estar-seguro',
    shortFrame: 'Liderazgo no es certeza. Es dar dirección suficiente mientras el sistema aprende.',
  },
  T10: {
    name: 'Encender el mínimo viable',
    blockName: 'Contaminación',
    postSlug: 'encender-el-minimo-viable',
    shortFrame: 'Si absorbes los errores ajenos, el sistema escala solo si tú escalas.',
  },
  T11: {
    name: 'Oxígeno o muerte',
    blockName: 'Supervivencia',
    postSlug: 'oxigeno-o-muerte',
    shortFrame: 'Sostener energía en crisis no es discurso, es eliminación brutal de lo no esencial.',
  },
  T12: {
    name: 'Oxígeno o muerte',
    blockName: 'Supervivencia',
    postSlug: 'oxigeno-o-muerte',
    shortFrame: 'Reacción lenta ante riesgo real es la señal de que ya hay que sobrevivir, no planear.',
  },
}
