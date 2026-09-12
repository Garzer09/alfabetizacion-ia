export const sources = {
  literacy:
    'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers',
  omnibus: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81147&lang=es',
  aiAct: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-81079',
  gdpr: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807',
  privacy: 'https://spiralia.es/politica-de-privacidad/',
  aepd: 'https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-publica-decalogo-recomendaciones-proteger-privacidad-al-usar-ia',
};
export const contact =
  'mailto:info@spiralia.es?subject=Programa%20de%20alfabetizaci%C3%B3n%20IA%20para%20mi%20empresa&body=Hola%2C%20equipo%20Spiralia%3A%0A%0AMe%20interesa%20conocer%20el%20programa%20de%20alfabetizaci%C3%B3n%20IA.%0A%0AEmpresa%3A%0AN%C3%BAmero%20aproximado%20de%20participantes%3A%0AHerramientas%20de%20IA%20que%20utilizamos%3A%0ANecesidades%20de%20alfabetizaci%C3%B3n%20y%20documentaci%C3%B3n%3A%0A%0AGracias.';
export const modules = [
  {
    title: 'Entender la IA y sus límites',
    tag: 'FUNDAMENTOS',
    description:
      'Qué hace un modelo generativo, por qué puede equivocarse y qué tareas requieren criterio humano. Identificar las herramientas que ya utilizas.',
    outcome:
      'Distinguir una ayuda útil de una respuesta que no puedes dar por válida.',
  },
  {
    title: 'Proteger datos y cuentas',
    tag: 'SEGURIDAD',
    description:
      'Datos personales, información confidencial, cuentas corporativas y permisos. Qué puedes compartir, qué debes evitar y cuándo consultar.',
    outcome: 'Decidir si un documento puede entrar en una herramienta de IA.',
  },
  {
    title: 'Verificar antes de utilizar',
    tag: 'CALIDAD',
    description:
      'Alucinaciones, referencias inventadas, sesgos y omisiones. Contrastar fuentes, números y conclusiones con un método sencillo.',
    outcome:
      'Revisar un resultado antes de enviarlo a un cliente o tomar una decisión.',
  },
  {
    title: 'Conocer las reglas del juego',
    tag: 'AI ACT + RGPD',
    description:
      'Alfabetización, protección de datos, transparencia y derechos de terceros. Identificar usos sensibles y situaciones que necesitan revisión especializada.',
    outcome:
      'Reconocer los límites del propio rol y saber cuándo escalar una consulta.',
  },
  {
    title: 'Trabajar mejor con IA',
    tag: 'APLICACIÓN',
    description:
      'Dar contexto, definir el resultado esperado e iterar. Practicar con correos, informes y análisis usando ejemplos ficticios o información autorizada.',
    outcome:
      'Mejorar un entregable y valorar su calidad, además del tiempo empleado.',
  },
  {
    title: 'Convertir el aprendizaje en hábito',
    tag: 'CRITERIO COMPARTIDO',
    description:
      'Aplicar la política interna, comunicar incidentes y acordar una rutina de revisión. Caso final y plan personal de aplicación.',
    outcome: 'Llevar al puesto de trabajo un protocolo de uso y verificación.',
  },
];
export const lessons = [
  {
    id: 'datos',
    name: 'Antes de subir un documento',
    category: 'DATOS Y CONFIDENCIALIDAD',
    duration: '3 min',
    videoUrl: null as string | null,
    summary: 'Decide qué información puedes compartir y qué debes consultar.',
    cases: [
      {
        title: 'El archivo de clientes',
        context:
          'Necesitas un resumen de ventas. El Excel contiene nombres, correos y condiciones comerciales. Solo tienes abierta tu cuenta personal de IA.',
        options: [
          'Lo subo: solo necesito un resumen.',
          'Quito los nombres y lo subo a la cuenta personal.',
          'No lo subo; busco el procedimiento y la herramienta autorizados.',
        ],
        correct: 2,
        explanation:
          'La prisa no autoriza el tratamiento. Quitar nombres puede dejar personas identificables y no elimina los datos comerciales confidenciales. Comprueba finalidad, permisos, minimización y condiciones de la herramienta con el equipo responsable.',
      },
      {
        title: 'Ya tienes una cuenta corporativa',
        context:
          'La empresa ha contratado una herramienta de IA. Un compañero afirma que ahora puede introducir cualquier documento.',
        options: [
          'Sí, la licencia corporativa permite cualquier dato.',
          'Depende de los usos autorizados, los datos y los controles acordados.',
          'No se puede utilizar nunca una IA en el trabajo.',
        ],
        correct: 1,
        explanation:
          'Una cuenta corporativa facilita el control, pero no concede permiso para cualquier uso. La política interna debe concretar datos permitidos, finalidades, accesos y condiciones. Ante la duda, consulta antes de compartir.',
      },
      {
        title: 'Un envío por error',
        context:
          'Descubres que has pegado información de un cliente en una herramienta no autorizada.',
        options: [
          'Lo comunico de inmediato por el canal interno y sigo el protocolo.',
          'Borro el chat y doy el problema por resuelto.',
          'Espero a ver si alguien lo detecta.',
        ],
        correct: 0,
        explanation:
          'Comunica el incidente cuanto antes y conserva la información necesaria para evaluarlo sin difundir más datos. Borrar la conversación no garantiza la eliminación en el proveedor. El equipo responsable valorará la brecha y las actuaciones que procedan.',
      },
    ],
  },
  {
    id: 'calidad',
    name: 'Una respuesta convincente no basta',
    category: 'VERIFICACIÓN Y CALIDAD',
    duration: '3 min',
    videoUrl: null as string | null,
    summary: 'Pon a prueba una respuesta antes de convertirla en una decisión.',
    cases: [
      {
        title: 'Un informe impecable',
        context:
          'La IA entrega un informe con cifras muy precisas y tres referencias. Tienes que enviarlo a dirección.',
        options: [
          'Lo envío; las referencias demuestran que está contrastado.',
          'Compruebo las fuentes originales, las cifras y la conclusión.',
          'Solo corrijo el estilo y la ortografía.',
        ],
        correct: 1,
        explanation:
          'Una referencia puede ser inexistente o no respaldar la afirmación. Abre las fuentes, revisa los cálculos y comprueba si la evidencia sostiene la conclusión. La buena redacción no demuestra exactitud.',
      },
      {
        title: 'Dos respuestas diferentes',
        context:
          'Repites una consulta y el modelo ofrece una recomendación distinta.',
        options: [
          'Elijo la respuesta más larga.',
          'Le pido que prometa que la segunda es correcta.',
          'Reviso supuestos y datos con una fuente o persona competente.',
        ],
        correct: 2,
        explanation:
          'La consistencia del modelo no sustituye la evidencia. Aclara el contexto, contrasta las premisas y pide revisión cuando la decisión tenga consecuencias relevantes.',
      },
      {
        title: 'La decisión sensible',
        context:
          'Se propone usar un ranking generado por IA para descartar candidaturas de empleo sin una revisión real.',
        options: [
          'Lo aplico porque ahorra tiempo.',
          'Pido revisión especializada del uso, los datos, los sesgos y las garantías.',
          'Cambio el título a “orientativo” y descarto automáticamente.',
        ],
        correct: 1,
        explanation:
          'La selección de personas exige especial cuidado. Una revisión simbólica o una etiqueta no solucionan el problema. El responsable debe evaluar el sistema, la normativa aplicable y las garantías antes de utilizarlo.',
      },
    ],
  },
];
