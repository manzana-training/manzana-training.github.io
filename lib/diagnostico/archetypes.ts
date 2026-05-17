export type Offer = 'Drill'

export type Archetype = {
  id: string
  name: string
  diagnosis: string
  longDiagnosis: string
  recommendedTs: string[]
  offer: Offer
  offerPrice: string
  offerCopy: string
}

const COMMON_OFFER_COPY =
  'Una sesión 1:1 de 45 min vía Google Meet sobre tu posición específica, con drill en vivo. Incluye Case Brief PDF (formato HBS/Wharton aplicado a tu caso) en las 48h siguientes.'

export const ARCHETYPES: Record<string, Archetype> = {
  apagafuegos: {
    id: 'apagafuegos',
    name: 'Apagafuegos sin sistema',
    diagnosis: 'Alta presión con baja estructura. El sistema no absorbe el costo de decidir.',
    longDiagnosis:
      'Vives operando en modo combate todo el tiempo porque la estructura del negocio no está absorbiendo decisiones de forma repetible. Cada incendio te toca apagarlo a ti porque el sistema no tiene reflejos propios. Esto se sostiene un trimestre, dos cuando mucho. Después colapsa o te quemas.',
    recommendedTs: ['T11', 'T12', 'T10'],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
  paralisis: {
    id: 'paralisis',
    name: 'Parálisis por ambigüedad',
    diagnosis: 'La presión es alta pero las decisiones no se cierran.',
    longDiagnosis:
      'Sabes lo que hay que hacer. El equipo también. Pero nada se cierra. Las decisiones se relitigan, se posponen esperando información perfecta, vuelven a la mesa en la siguiente junta. El costo de no decidir ya es mayor que el de decidir mal.',
    recommendedTs: ['T1', 'T2', 'T3'],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
  politica: {
    id: 'politica',
    name: 'Política domina',
    diagnosis: 'Falta control de espacio y poder bajo presión.',
    longDiagnosis:
      'Las decisiones reales no se toman en las juntas formales. Se toman en pasillos, en chats laterales, en cafés. Tú llegas a un acuerdo y se deshace antes de la siguiente reunión. La estructura formal no manda — manda la política informal.',
    recommendedTs: ['T6', 'T8', 'T5'],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
  heroismo: {
    id: 'heroismo',
    name: 'Heroísmo agotador',
    diagnosis: 'El sistema depende del esfuerzo individual para sostenerse.',
    longDiagnosis:
      'El negocio funciona porque tú (o dos o tres personas) lo cargan a pulmón. Si te enfermas un mes, todo se cae. Si tomas vacaciones, los problemas se acumulan esperando tu regreso. La energía es finita; el sistema te está cobrando intereses cada semana.',
    recommendedTs: ['T11', 'T10', 'T7'],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
  sistema_solido: {
    id: 'sistema_solido',
    name: 'Sistema sólido con fricción puntual',
    diagnosis: 'La estructura es fuerte; el problema es táctico.',
    longDiagnosis:
      'El negocio tiene huesos. Las decisiones se toman, se ejecutan, se cierran. Lo que tienes es un punto específico de fricción que no escala: una conversación que evitas, una posición que no tienes entrenada, un reflejo que falla solo en el momento de presión. No necesitas un rediseño — necesitas un drill.',
    recommendedTs: ['T1', 'T5', 'T9'],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
  friccion_moderada: {
    id: 'friccion_moderada',
    name: 'Fricción estructural moderada',
    diagnosis: 'Existen brechas de ejecución bajo presión.',
    longDiagnosis:
      'Ni colapso ni excelencia. El sistema funciona, con costo. Hay 2-3 posiciones donde la presión te encuentra sin reflejo y termina costando más de lo que debería. La buena noticia: son entrenables. La mala: ignorarlas las convierte en cualquiera de los arquetipos anteriores en 12-18 meses.',
    recommendedTs: [],
    offer: 'Drill',
    offerPrice: '$1,500 MXN',
    offerCopy: COMMON_OFFER_COPY,
  },
}

export type Scores = {
  ms: number
  pr: number
  space: number
  time: number
  energy: number
  decision: number
  power: number
  narrative: number
  exit: number
  rb: number
}

export function detectArchetype(s: Scores): Archetype {
  if (s.pr >= 70 && s.ms < 55) return ARCHETYPES.apagafuegos
  if (s.decision < 55 && s.pr >= 60) return ARCHETYPES.paralisis
  if (s.power < 55 && s.space < 55 && s.pr >= 60) return ARCHETYPES.politica
  if (s.energy < 50 && s.pr >= 60 && s.ms < 65) return ARCHETYPES.heroismo
  if (s.ms >= 70 && s.pr < 65) return ARCHETYPES.sistema_solido
  return ARCHETYPES.friccion_moderada
}
