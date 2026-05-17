export type LikertQ = { k: string; t: string }
export type VignetteQ = {
  k: string
  t: string
  opts: { A: string; B: string; C: string; D: string }
}

export const QUESTIONS = {
  STRUCT: [
    { k: 'S1', t: 'Las decisiones tienen dueño claro.' },
    { k: 'S2', t: 'Existe una forma consistente de cerrar decisiones.' },
    { k: 'S3', t: 'Las métricas o criterios son suficientemente claros para ejecutar sin debates semánticos constantes.' },
    { k: 'S4', t: 'La información clave llega a tiempo para actuar.' },
    { k: 'S5', t: 'Cuando se escala algo, deja reglas claras para el futuro.' },
  ] as LikertQ[],
  PRESSURE: [
    { k: 'P1', t: 'Decisiones ya tomadas vuelven a discutirse.' },
    { k: 'P2', t: 'Conversaciones informales reemplazan decisiones formales.' },
    { k: 'P3', t: 'Se posponen decisiones esperando información perfecta.' },
    { k: 'P4', t: 'Hay reuniones largas sin cierre claro.' },
    { k: 'P5', t: 'Los desacuerdos se vuelven personales.' },
    { k: 'P6', t: 'Se percibe cansancio o irritación frecuente.' },
    { k: 'P7', t: 'Existe temor a asumir el costo de decidir.' },
    { k: 'P8', t: 'Se corrigen cosas que ya se habían acordado.' },
    { k: 'P9', t: 'Problemas estructurales se resuelven con esfuerzo individual, no con cambios sistémicos.' },
    { k: 'P10', t: 'Hay señales de riesgo real en resultados o dirección.' },
  ] as LikertQ[],
  SITUATION: [
    { k: 'T1', t: 'Decidir con información incompleta me genera fricción.' },
    { k: 'T2', t: 'Elegir entre dos opciones costosas detiene la acción.' },
    { k: 'T3', t: 'El tiempo presiona y se pierde claridad.' },
    { k: 'T4', t: 'Sostener decisiones impopulares debilita la ejecución.' },
    { k: 'T5', t: 'Hay resistencia pasiva que frena resultados.' },
    { k: 'T6', t: 'Necesito influir sin autoridad formal.' },
    { k: 'T7', t: 'Decir "no" genera tensiones difíciles de manejar.' },
    { k: 'T8', t: 'Conflictos entre partes bloquean avances.' },
    { k: 'T9', t: 'Liderar sin certeza total incomoda.' },
    { k: 'T10', t: 'Termino absorbiendo errores ajenos para que las cosas funcionen.' },
    { k: 'T11', t: 'Mantener energía del equipo o propia en crisis es desafiante.' },
    { k: 'T12', t: 'Cuando el entorno está en riesgo, la reacción es lenta.' },
  ] as LikertQ[],
  MOVES: [
    { k: 'M1', t: 'Llevo la conversación al espacio correcto para decidir.' },
    { k: 'M2', t: 'Cierro canales laterales que generan ambigüedad.' },
    { k: 'M3', t: 'Defino un deadline claro para cerrar.' },
    { k: 'M4', t: 'Mantengo la conversación en lo esencial, evitando dramatización.' },
    { k: 'M5', t: 'Reduzco opciones a alternativas claras con trade-offs explícitos.' },
    { k: 'M6', t: 'Declaro qué significa "decisión cerrada" y lo sostengo.' },
    { k: 'M7', t: 'Negocio intercambiando valor, no solo argumentos.' },
    { k: 'M8', t: 'Escalo con marco claro cuando es necesario.' },
    { k: 'M9', t: 'Reencuadro conflictos hacia el sistema, no hacia personas.' },
    { k: 'M10', t: 'Sé retirarme estratégicamente cuando seguir discutiendo no agrega valor.' },
  ] as LikertQ[],
  VIGNETTES: [
    {
      k: 'V1',
      t: 'Proyecto estancado sin oposición explícita. ¿Qué haces primero?',
      opts: {
        A: 'Convocar otra reunión de alineación',
        B: 'Nombrar el patrón, costo y declarar deadline con responsable',
        C: 'Esperar más información antes de intervenir',
        D: 'Resolverlo personalmente para asegurar avance',
      },
    },
    {
      k: 'V2',
      t: 'Decisión impopular necesaria.',
      opts: {
        A: 'Buscar ajustes para evitar incomodidad',
        B: 'Reencuadrar costo-beneficio y declarar cierre formal',
        C: 'Esperar a que el entorno fuerce la decisión',
        D: 'Mantener ambigüedad para evitar conflicto',
      },
    },
    {
      k: 'V3',
      t: 'Dos partes bloquean un avance importante.',
      opts: {
        A: 'Mediar indefinidamente hasta que "se alineen"',
        B: 'Escalar con opciones claras y costo de no decidir',
        C: 'Evitar escalar para no generar fricción',
        D: 'Tomar partido emocionalmente',
      },
    },
  ] as VignetteQ[],
}

export const CONTEXT_OPTIONS = {
  posicion: [
    { value: 'founder', label: 'Founder / Dueño' },
    { value: 'director', label: 'Director / C-level' },
    { value: 'manager', label: 'Manager' },
    { value: 'profesional_individual', label: 'Profesional individual' },
    { value: 'consultor_rh', label: 'Consultor / RH' },
    { value: 'otro', label: 'Otro' },
  ],
  entorno: [
    { value: 'startup_temprana', label: 'Startup temprana' },
    { value: 'crecimiento', label: 'Empresa en crecimiento' },
    { value: 'establecida', label: 'Empresa establecida' },
    { value: 'independiente', label: 'Proyecto independiente' },
    { value: 'otro', label: 'Otro' },
  ],
}

export type ContextData = {
  nombre: string
  email: string
  posicion: string
  entorno: string
}
