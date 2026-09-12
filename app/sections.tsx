import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  ScanEye,
  TrendingUp,
  FileCheck2,
  Download,
  Layers,
  Mail,
} from 'lucide-react';
import { Curriculum, RoleBenefits, SampleLessons, FAQs } from './interactive';
import { contact, sources } from './content';
export default function Sections() {
  return (
    <>
      <section className="section wrap sanctions-section" id="sanciones">
        <p className="eyebrow">01 / EL COSTE DEL INCUMPLIMIENTO</p>
        <div className="section-head">
          <h2>
            Las sanciones son reales.
            <br />
            La preparación importa.
          </h2>
          <p>
            El marco europeo prevé consecuencias económicas relevantes. La
            infracción concreta determina qué régimen puede aplicarse.
          </p>
        </div>
        <div className="sanction-grid">
          <article className="sanction-card">
            <p className="sanction-label">AI ACT · PRÁCTICAS PROHIBIDAS</p>
            <span className="sanction-cap">Hasta</span>
            <h3>
              35 M€ <span>o el 7 %</span>
            </h3>
            <p>
              Por incumplir las prohibiciones del artículo 5. En empresas, se
              compara con la facturación mundial anual del ejercicio anterior.
            </p>
            <a
              className="text-link"
              href={sources.aiAct}
              target="_blank"
              rel="noreferrer"
            >
              AI Act · Art. 99.3 <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="sanction-card">
            <p className="sanction-label">RGPD · DETERMINADAS INFRACCIONES</p>
            <span className="sanction-cap">Hasta</span>
            <h3>
              20 M€ <span>o el 4 %</span>
            </h3>
            <p>
              Por infracciones como vulnerar los principios del tratamiento o
              los derechos de las personas. En empresas, se compara con la
              facturación mundial anual del ejercicio anterior.
            </p>
            <a
              className="text-link"
              href={sources.gdpr}
              target="_blank"
              rel="noreferrer"
            >
              RGPD · Art. 83.5 <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="sanction-card literacy-card">
            <p className="sanction-label">
              ALFABETIZACIÓN · OBLIGACIÓN ESPECÍFICA
            </p>
            <span className="sanction-cap">AI Act</span>
            <h3>Artículo 4</h3>
            <p>
              Exige adoptar medidas de alfabetización adaptadas al contexto. Su
              incumplimiento se valora conforme al régimen aplicable; no tiene
              asignados automáticamente los máximos anteriores.
            </p>
            <a
              className="text-link"
              href={sources.literacy}
              target="_blank"
              rel="noreferrer"
            >
              Orientaciones de la Comisión <ArrowUpRight size={17} />
            </a>
          </article>
        </div>
        <div className="sanction-context">
          <p>
            Son límites máximos, no sanciones automáticas. Como regla general,
            para empresas se aplica la cuantía mayor; el AI Act contempla reglas
            específicas para pymes. Los importes anteriores no son la multa por
            carecer de un curso.
          </p>
          <a className="text-link" href="#preguntas">
            Ver el detalle de las sanciones <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="legal-section dark" id="normativa">
        <div className="wrap section">
          <p className="eyebrow light">02 / EL MARCO NORMATIVO</p>
          <div className="section-head">
            <h2>
              La obligación ya existe.
              <br />
              ¿Qué medidas has tomado?
            </h2>
            <p>
              Si tu empresa utiliza IA, necesita atender las obligaciones que
              correspondan a sus usos. Esperar a que haya un problema no prepara
              a tu equipo para evitarlos.
            </p>
          </div>
          <div className="legal-grid">
            <article>
              <span className="legal-tag">AI ACT · ARTÍCULO 4</span>
              <h3>
                Formar según los usos.
                <br />
                Actuar con un plan.
              </h3>
              <p>
                La redacción vigente exige apoyar la alfabetización de quienes
                usan IA por cuenta de la organización, atendiendo a sus
                conocimientos y al contexto de uso.
              </p>
              <a
                className="text-link"
                href={sources.omnibus}
                target="_blank"
                rel="noreferrer"
              >
                Consultar el texto vigente <ArrowUpRight size={17} />
              </a>
            </article>
            <article>
              <span className="legal-tag">RGPD · DATOS PERSONALES</span>
              <h3>
                La cuenta es personal.
                <br />
                El riesgo también es empresarial.
              </h3>
              <p>
                Usar IA no elimina las obligaciones sobre datos personales.
                Compartirlos requiere evaluar la finalidad, las garantías del
                proveedor y la seguridad.
              </p>
              <a
                className="text-link"
                href={sources.gdpr}
                target="_blank"
                rel="noreferrer"
              >
                Consultar el RGPD <ArrowUpRight size={17} />
              </a>
            </article>
            <article className="legal-note">
              <ShieldCheck size={30} strokeWidth={1.4} />
              <h3>
                Poder explicar
                <br />
                qué has hecho.
              </h3>
              <p>
                Un plan, contenidos adecuados y registros permiten documentar
                las medidas de alfabetización. Acordamos contigo cómo incorporar
                esa evidencia a la gestión de tu empresa.
              </p>
              <a className="text-link" href="#evidencias">
                Ver cómo documentar la formación <ArrowRight size={17} />
              </a>
            </article>
          </div>
          <div className="legal-foot">
            <span>Revisión de fuentes: 11 de septiembre de 2026.</span>
            <span>
              Reforma del artículo 4 en vigor desde el 27 de julio de 2026.
            </span>
          </div>
        </div>
      </section>
      <section className="section wrap" id="riesgos">
        <p className="eyebrow">03 / DEL USO COTIDIANO AL RIESGO LEGAL</p>
        <div className="section-head">
          <h2>
            Un error del equipo.
            <br />
            Una responsabilidad para la empresa.
          </h2>
          <p>
            El riesgo no empieza cuando llega una notificación. Puede empezar al
            compartir datos, aceptar una respuesta o usar una cuenta sin
            autorización.
          </p>
        </div>
        <div className="risk-grid">
          {[
            [
              '01',
              'Datos sin garantías.',
              'Datos de clientes o de empleados en una herramienta no autorizada pueden comprometer la confidencialidad y las obligaciones de protección de datos.',
            ],
            [
              '02',
              'Decisiones sin revisión.',
              'Usar una respuesta sin comprobar su exactitud o sus sesgos puede afectar a clientes, candidatos o empleados y dar lugar a reclamaciones.',
            ],
            [
              '03',
              'Usos fuera de control.',
              'Las cuentas personales pueden dificultar el control de accesos, la gestión de la información y la respuesta ante un incidente.',
            ],
          ].map(([n, t, d]) => (
            <article className="risk-card" key={n}>
              <span className="number">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <div className="section-end">
          <span>
            La formación ayuda a reconocer estas situaciones antes de que se
            conviertan en un incidente.
          </span>
          <a href="#programa" className="text-link">
            Preparar al equipo <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="evidence-section" id="evidencias">
        <div className="section wrap evidence-layout">
          <div>
            <p className="eyebrow">04 / MEDIDAS QUE PUEDES DOCUMENTAR</p>
            <h2>
              Formar.
              <br />
              Aplicar.
              <br />
              <span className="highlight">Dejar constancia.</span>
            </h2>
            <p className="lead">
              Si necesitas explicar cómo has formado a tu equipo, conviene tener
              la respuesta preparada: a quién, sobre qué riesgos, cuándo y con
              qué seguimiento.
            </p>
            <a
              className="text-link evidence-link"
              href="/guia-uso-responsable-ia.txt"
              download
            >
              <Download size={18} /> Descargar guía de uso responsable
            </a>
          </div>
          <ol className="implementation-list">
            {[
              [
                'Identificar la exposición',
                'Identificar usos, perfiles, conocimientos previos y riesgos con los responsables del programa.',
              ],
              [
                'Asignar la formación',
                'Asignar contenidos, comunicar el propósito y facilitar la práctica con información ficticia o autorizada.',
              ],
              [
                'Conservar las evidencias',
                'Acordar evaluación, registros de participación y una revisión cuando cambien las herramientas o los usos.',
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap evidence-strip">
          <FileCheck2 size={22} />
          <p>
            <strong>Qué conviene conservar:</strong> objetivos, temario y
            versión, fechas, participantes, evaluación y acciones de refuerzo.
            El soporte y los entregables se concretarán en la propuesta.
          </p>
        </div>
      </section>
      <section className="program-section" id="programa">
        <div className="section wrap">
          <div className="program-intro">
            <div>
              <p className="eyebrow">05 / EL PLAN FORMATIVO</p>
              <h2>
                De la obligación
                <br />
                a un plan
                <br />
                de formación.
              </h2>
            </div>
            <div>
              <p>
                Un itinerario para reconocer riesgos, proteger datos y aplicar
                las reglas de uso de IA. Seis módulos propuestos, con casos
                prácticos y evaluación.
              </p>
              <div className="program-specs">
                <span>
                  <strong>06</strong>Módulos propuestos
                </span>
                <span>
                  <strong>~4 h</strong>Con práctica incluida
                </span>
                <span>
                  <strong>Online</strong>Formato grabado previsto
                </span>
              </div>
              <p className="fine-print">
                Propuesta de itinerario. La duración y el alcance se ajustarán
                al perfil y a los usos de tu organización.
              </p>
            </div>
          </div>
          <Curriculum />
          <div className="curriculum-foot">
            <span>
              <Layers size={19} /> Base común + adaptación por función y riesgo
            </span>
            <a href={contact} className="text-link">
              Diseñar el itinerario de mi equipo <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section wrap samples-section" id="muestra">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 / COMPRUEBA EL ENFOQUE</p>
            <h2>
              ¿Sabría tu equipo
              <br />
              detectar este riesgo?
            </h2>
          </div>
          <p>
            Una situación. Tres decisiones.
            <br />
            Comprueba qué harías y descubre el porqué.
            <br />
            <strong>Acceso libre, sin registro.</strong>
          </p>
        </div>
        <SampleLessons />
        <div className="sample-footer">
          <p>¿Quieres conocer la versión grabada para tu equipo?</p>
          <a href={contact} className="text-link">
            Pedir información del módulo <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="section wrap" id="beneficios">
        <p className="eyebrow">07 / EL BENEFICIO ADICIONAL</p>
        <div className="section-head">
          <h2>
            Un equipo preparado
            <br />
            también trabaja mejor.
          </h2>
          <p>
            La prioridad es un uso responsable. El aprendizaje también puede
            mejorar la calidad, la autonomía y la productividad del equipo.
          </p>
        </div>
        <div className="benefit-grid">
          {[
            [
              ShieldCheck,
              'Proteger',
              'Reconocer información sensible y aplicar los límites de uso de cada herramienta.',
            ],
            [
              ScanEye,
              'Decidir',
              'Detectar respuestas incorrectas, contrastar fuentes y conservar el control humano.',
            ],
            [
              TrendingUp,
              'Mejorar',
              'Crear mejores borradores, análisis e informes con un método de revisión.',
            ],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <article key={String(title)}>
                <I size={30} strokeWidth={1.3} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            );
          })}
        </div>
        <RoleBenefits />
      </section>
      <section className="section wrap why-section">
        <div>
          <p className="eyebrow">EL ENFOQUE SPIRALIA</p>
          <h2>
            La tecnología cambia.
            <br />
            Las personas la
            <br />
            hacen útil.
          </h2>
        </div>
        <div>
          <p className="why-lead">
            La formación funciona cuando tiene sentido para quien la recibe.
          </p>
          <p>
            Spiralia Training plantea una metodología práctica, adaptada por
            niveles y departamentos, con verificación humana y foco en la
            aplicación al negocio.
          </p>
          <a
            href="https://spiralia.es/training/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Conoce nuestra forma de trabajar <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="section wrap faq-section" id="preguntas">
        <div>
          <p className="eyebrow">08 / DUDAS SOBRE CUMPLIMIENTO</p>
          <h2>
            Obligaciones y sanciones.
            <br />
            Respuestas claras.
          </h2>
          <p>
            Qué aporta el programa.
            <br />Y qué necesitas valorar en tu empresa.
          </p>
        </div>
        <FAQs />
      </section>
      <section className="contact-section" id="contacto">
        <div className="wrap">
          <p className="eyebrow">EL SIGUIENTE PASO</p>
          <h2>
            No esperes a una reclamación
            <br />
            para preparar a tu equipo.
          </h2>
          <p>
            Empieza por un plan de alfabetización adaptado a tus usos y riesgos.
            <br />
            Concretemos la formación y las evidencias que necesita tu empresa.
          </p>
          <div className="actions">
            <a className="button navy" href={contact}>
              Preparar mi plan de formación <ArrowUpRight size={20} />
            </a>
            <a className="text-link" href="tel:+34917118526">
              +34 917 118 526 <ArrowUpRight size={17} />
            </a>
          </div>
          <span className="contact-note">
            <Mail size={14} /> La solicitud abre tu correo · info@spiralia.es
          </span>
        </div>
      </section>
    </>
  );
}
