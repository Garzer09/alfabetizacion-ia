import Image from 'next/image';
import Sections from './sections';
import { contact, sources } from './content';
import { ArrowUpRight, ArrowRight, Check, ShieldCheck } from 'lucide-react';
export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#inicio" aria-label="Spiralia, inicio">
          <Image
            unoptimized
            className="logo"
            src="/brand/logo.svg"
            alt="Spiralia"
            width="171"
            height="42"
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sanciones">Sanciones y obligaciones</a>
          <a href="#programa">El programa</a>
          <a href="#muestra">Pruébalo</a>
        </nav>
        <a className="button small navy" href="#contacto">
          Solicitar propuesta <ArrowUpRight size={17} />
        </a>
      </header>
      <main id="inicio">
        <a className="skip-link" href="#programa">
          Ir al programa
        </a>
        <section className="hero wrap compliance-hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> ALFABETIZACIÓN IA · AI ACT Y RGPD
            </p>
            <h1>
              La IA tiene
              <br />
              reglas.
              <br />
              Incumplirlas
              <br />
              <span className="highlight">puede salir caro.</span>
            </h1>
            <p className="lead">
              El AI Act y el RGPD contemplan sanciones por incumplimientos en el
              uso de IA. Prepara a tu equipo, reduce conductas de riesgo y
              documenta las medidas de alfabetización que adopta tu empresa.
            </p>
            <div className="actions">
              <a className="button navy" href="#contacto">
                Preparar mi plan de formación <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href="#sanciones">
                Ver obligaciones y sanciones <ArrowRight size={18} />
              </a>
            </div>
            <p className="hero-note">
              <Check size={15} /> Formación por perfiles <span>·</span> Programa
              en preparación
            </p>
          </div>
          <div className="hero-visual">
            <Image
              unoptimized
              className="hero-image"
              src="/brand/human-and-ai.jpg"
              alt="Una mano humana en contacto con una mano robótica"
              width="1500"
              height="1000"
            />
            <div className="visual-caption">
              <span>
                FORMAR AL EQUIPO.
                <br />
                DOCUMENTAR LAS MEDIDAS.
              </span>
              <span className="visual-index">01 / SPIRALIA</span>
            </div>
            <a className="sample-teaser" href="#evidencias">
              <span className="teaser-icon">
                <ShieldCheck size={26} />
              </span>
              <span>
                <small>ANTE UNA REVISIÓN</small>
                <strong>¿Qué formación podrías acreditar?</strong>
              </span>
              <ArrowUpRight size={25} />
            </a>
          </div>
        </section>
        <div className="ticker">
          <div className="wrap">
            <span>CONOCE TUS OBLIGACIONES</span>
            <span>↗</span>
            <span>REDUCE CONDUCTAS DE RIESGO</span>
            <span>↗</span>
            <span>DOCUMENTA TUS MEDIDAS</span>
            <span>↗</span>
          </div>
        </div>
        <Sections />
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <a href="https://spiralia.es/" aria-label="Web de Spiralia">
            <Image
              unoptimized
              src="/brand/logo.svg"
              alt="Spiralia"
              width="166"
              height="40"
            />
          </a>
          <span>FORMACIÓN. PREVENCIÓN. EVIDENCIAS.</span>
          <a href={contact} className="text-link">
            Hablemos <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Spiralia</span>
          <a href={sources.privacy} target="_blank" rel="noreferrer">
            Política de privacidad
          </a>
          <a href="#normativa">Fuentes y marco normativo</a>
          <span>Madrid · España</span>
        </div>
        <p className="footer-disclaimer">
          Información general, no asesoramiento jurídico. La formación
          contribuye a la alfabetización; no garantiza por sí sola el
          cumplimiento de toda la normativa aplicable. Muestras e itinerario
          propuestos para el programa en preparación.
        </p>
      </footer>
    </>
  );
}
