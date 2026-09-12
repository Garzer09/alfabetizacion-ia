'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  FileText,
  RotateCcw,
  X,
  BookOpen,
  Download,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { modules, lessons, sources, contact } from './content';

export function Curriculum() {
  return (
    <Accordion className="curriculum">
      {modules.map((m, i) => (
        <AccordionItem value={String(i)} key={m.title}>
          <AccordionTrigger className="module-trigger">
            <span className="module-no">0{i + 1}</span>
            <span className="module-name">{m.title}</span>
            <span className="module-tag">{m.tag}</span>
          </AccordionTrigger>
          <AccordionContent className="module-content">
            <p>{m.description}</p>
            <div className="module-outcome">
              <Check size={17} />
              <span>{m.outcome}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function RoleBenefits() {
  const roles = [
    {
      id: 'equipo',
      tab: 'Para el equipo',
      title: 'Saber qué hacer. Y cuándo parar.',
      description:
        'Reconocer datos sensibles, formular mejores peticiones y revisar los resultados. Con ejemplos que se parecen a su trabajo.',
      items: [
        'Criterios para elegir tareas y herramientas',
        'Un método de verificación fácil de repetir',
        'Un canal claro para dudas e incidentes',
      ],
    },
    {
      id: 'rrhh',
      tab: 'Para RR. HH.',
      title: 'Organizar el plan. Conservar el registro.',
      description:
        'Una base compartida y contenidos según el perfil. Un planteamiento que permite organizar grupos y seguir el aprendizaje.',
      items: [
        'Itinerario y objetivos de aprendizaje',
        'Evaluación y registro de participación',
        'Plan de incorporación para nuevas personas',
      ],
    },
    {
      id: 'direccion',
      tab: 'Para dirección y compliance',
      title: 'Saber qué medidas puedes acreditar.',
      description:
        'Identificar las prioridades de alfabetización, asignar responsables y disponer de registros para explicar las actuaciones formativas de la empresa.',
      items: [
        'Prioridades según herramientas y riesgos',
        'Evidencias de las medidas formativas',
        'Seguimiento y refuerzo según los riesgos',
      ],
    },
  ];
  return (
    <Tabs defaultValue="direccion" className="role-tabs">
      <TabsList className="role-tabs-list">
        {roles.map((r) => (
          <TabsTrigger key={r.id} value={r.id}>
            {r.tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {roles.map((r) => (
        <TabsContent key={r.id} value={r.id} className="role-content">
          <div>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
          <ul>
            {r.items.map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function SampleLessons() {
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const caseHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (step > 0 || finished) caseHeading.current?.focus();
  }, [step, finished]);
  const lesson = selected === null ? null : lessons[selected];
  const current = lesson?.cases[step];
  function start(index: number) {
    setStep(0);
    setAnswer(null);
    setScore(0);
    setFinished(false);
    setSelected(index);
  }
  function next() {
    if (!lesson || answer === null) return;
    const total = score + (answer === lesson.cases[step].correct ? 1 : 0);
    setScore(total);
    setAnswer(null);
    if (step === lesson.cases.length - 1) setFinished(true);
    else setStep(step + 1);
  }
  return (
    <>
      <div className="lesson-grid">
        {lessons.map((l, i) => (
          <article className={`lesson-card lesson-${i}`} key={l.id}>
            <div className="lesson-top">
              <span>{l.category}</span>
              <span>{l.duration}</span>
            </div>
            <div className="lesson-art" aria-hidden="true">
              {i === 0 ? (
                <FileText size={42} strokeWidth={1} />
              ) : (
                <span className="quote-symbol">“</span>
              )}
              <span className="lesson-count">0{i + 1}</span>
            </div>
            <h3>{l.name}</h3>
            <p>{l.summary}</p>
            <button className="lesson-button" onClick={() => start(i)}>
              Probar la lección <ArrowUpRight size={21} />
            </button>
            {l.videoUrl ? (
              <video
                controls
                preload="none"
                src={l.videoUrl}
                aria-label={`Vídeo: ${l.name}`}
              >
                <track kind="captions" />
                <a href={l.videoUrl}>Abrir vídeo</a>
              </video>
            ) : (
              <span className="video-status">
                <BookOpen size={14} /> Muestra interactiva · Versión en vídeo en
                preparación
              </span>
            )}
          </article>
        ))}
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="lesson-dialog" showCloseButton={false}>
          <DialogClose className="dialog-close" aria-label="Cerrar lección">
            <X size={22} />
          </DialogClose>
          <p className="eyebrow">SPIRALIA / APRENDER HACIENDO</p>
          <DialogTitle className="dialog-title">{lesson?.name}</DialogTitle>
          <DialogDescription className="dialog-description">
            Casos ficticios para practicar tu criterio. Esta muestra no acredita
            la finalización del programa.
          </DialogDescription>
          {lesson && current && !finished ? (
            <>
              <div className="progress-label">
                <span>
                  Caso {step + 1} de {lesson.cases.length}
                </span>
                <span>{Math.round((step / lesson.cases.length) * 100)}%</span>
              </div>
              <Progress
                value={(step / lesson.cases.length) * 100}
                aria-label="Progreso de la lección"
                className="lesson-progress"
              />
              <h3 ref={caseHeading} className="case-title" tabIndex={-1}>
                {current.title}
              </h3>
              <p className="case-context">{current.context}</p>
              <fieldset className="answer-options">
                <legend className="sr-only">Elige cómo actuarías</legend>
                {current.options.map((option, i) => (
                  <button
                    key={`${step}-${i}`}
                    disabled={answer !== null}
                    className={`answer-option ${answer === i ? 'chosen' : ''} ${answer !== null && i === current.correct ? 'correct' : ''}`}
                    onClick={() => setAnswer(i)}
                  >
                    <span>{String.fromCharCode(65 + i)}</span>
                    {option}
                    {answer !== null && i === current.correct ? (
                      <Check size={19} />
                    ) : null}
                  </button>
                ))}
              </fieldset>
              {answer !== null ? (
                <div className="answer-feedback" aria-live="polite">
                  <strong>
                    {answer === current.correct
                      ? 'Buen criterio.'
                      : 'La decisión más adecuada es otra.'}
                  </strong>
                  <p>{current.explanation}</p>
                  <button className="button navy" onClick={next}>
                    {step === lesson.cases.length - 1
                      ? 'Ver mi resultado'
                      : 'Siguiente caso'}
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : null}
            </>
          ) : finished && lesson ? (
            <div className="lesson-result" aria-live="polite">
              <span className="result-score">
                {score}
                <small>/{lesson.cases.length}</small>
              </span>
              <h3 ref={caseHeading} tabIndex={-1}>
                El criterio se entrena.
              </h3>
              <p>
                Has completado la muestra. La clave: comprobar la herramienta,
                proteger la información y revisar antes de actuar.
              </p>
              <a
                className="button navy"
                href="/guia-uso-responsable-ia.txt"
                download
              >
                <Download size={17} /> Descargar recordatorio
              </a>
              <a className="text-link" href={contact}>
                Quiero este enfoque para mi equipo <ArrowUpRight size={17} />
              </a>
              <button className="restart" onClick={() => start(selected!)}>
                <RotateCcw size={15} /> Repetir lección
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function FAQs() {
  const questions: [string, ReactNode][] = [
    [
      '¿Es obligatorio contratar un curso concreto?',
      <>
        El artículo 4 establece medidas de alfabetización adaptadas al contexto.
        No prescribe un proveedor, un número universal de horas ni un itinerario
        único.{' '}
        <a href={sources.literacy} target="_blank" rel="noreferrer">
          Consulta las orientaciones de la Comisión.
        </a>
      </>,
    ],
    [
      '¿Un certificado garantiza que mi empresa cumple?',
      <>
        No. Un registro de formación puede documentar una medida adoptada, pero
        el cumplimiento depende del uso real de la IA, los riesgos y las demás
        obligaciones aplicables. El programa no sustituye una revisión jurídica
        ni certifica por sí solo a la organización.
      </>,
    ],
    [
      '¿A quién debería formar?',
      <>
        A las personas que utilizan u operan IA por cuenta de la organización,
        con contenidos adecuados a sus funciones. El alcance puede incluir
        colaboradores externos. Dirección, RR. HH. y los equipos con acceso a
        información sensible pueden necesitar contenidos adicionales.
      </>,
    ],
    [
      '¿Qué relación tiene con el RGPD?',
      <>
        Cuando intervienen datos personales, el RGPD sigue siendo aplicable.
        Deben revisarse, según el caso, finalidad, base jurídica, minimización,
        proveedor, seguridad y transferencias. La formación ayuda a reconocer
        cuándo consultar al responsable de privacidad.{' '}
        <a href={sources.gdpr} target="_blank" rel="noreferrer">
          Ver el RGPD.
        </a>
      </>,
    ],
    [
      '¿Qué multas están realmente en juego?',
      <>
        Los máximos generales del AI Act dependen de la infracción: 35 M€ o el 7
        % para prácticas prohibidas; 15 M€ o el 3 % para determinadas
        obligaciones; 7,5 M€ o el 1 % para información incorrecta a autoridades.
        Como regla general se toma la cuantía mayor, con reglas específicas para
        pymes y pequeñas empresas de mediana capitalización. No son una tarifa
        automática por carecer de un curso. El RGPD prevé máximos de 10 M€ o el
        2 %, y de 20 M€ o el 4 %, según la infracción; en empresas, la cuantía
        mayor. Toda sanción exige valorar el caso.{' '}
        <a href={sources.aiAct} target="_blank" rel="noreferrer">
          AI Act, art. 99
        </a>{' '}
        ·{' '}
        <a href={sources.omnibus} target="_blank" rel="noreferrer">
          Reforma de 2026
        </a>{' '}
        ·{' '}
        <a href={sources.gdpr} target="_blank" rel="noreferrer">
          RGPD, art. 83
        </a>
        .
      </>,
    ],
    [
      '¿Está disponible ya el programa grabado?',
      <>
        El programa grabado está en preparación. Puedes probar ahora las
        muestras interactivas y solicitar información. La propuesta comercial
        concretará disponibilidad, duración, contenidos, participantes y
        condiciones de acceso.
      </>,
    ],
    [
      '¿Cómo se adapta a nuestra empresa y cuánto cuesta?',
      <>
        El alcance debe ajustarse al número de participantes, las herramientas,
        los perfiles y el acompañamiento necesario. Solicita una propuesta para
        concretar el itinerario y el precio. La plataforma, los registros y las
        actualizaciones se acordarán en esa propuesta.
      </>,
    ],
  ];
  const orderedQuestions = [
    questions[4],
    questions[0],
    questions[1],
    questions[3],
    questions[2],
    questions[5],
    questions[6],
  ];
  return (
    <Accordion className="faq-list">
      {orderedQuestions.map(([q, a], i) => (
        <AccordionItem value={String(i)} key={q}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
