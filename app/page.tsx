import Image from 'next/image';
import { RevealOnScroll } from './components/RevealOnScroll';
import { SiteNav } from './components/SiteNav';

export default function Home() {
  return (
    <>
      <RevealOnScroll />

      <SiteNav />

      <section id="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Manivis</p>
          <h1 className="hero-title">
            A MANIPUEIRA
            <br />
            TRANSFORMA
            <br />
            RESÍDUO EM
            <br />
            RIQUEZA.
          </h1>
          <p className="hero-sub">Você conhece a manipueira?</p>
          <a href="#manipueira" className="btn-primary">
            Saiba mais
          </a>
        </div>
      </section>

      <section id="manipueira">
        <div className="manip-text reveal">
          <h2 className="section-title">MANIPUEIRA</h2>
          <p className="section-body">
            A manipueira é o líquido extraído da mandioca quando ela é prensada no processo de fabricação da farinha. Tanto a mandioca quanto esse líquido contêm ácido cianídrico, venenoso e nocivo à alimentação humana e animal.
          </p>
        </div>
        <div className="manip-img reveal">
          <div className="manip-img-placeholder">📸 Imagem da manipueira</div>
        </div>
      </section>

      <section id="problemas">
        <div className="prob-header reveal">
          <h2 className="section-title">
            PRINCIPAIS
            <br />
            PROBLEMAS
          </h2>
        </div>
        <div className="prob-grid">
          <div className="prob-card reveal">
            <div className="prob-card-icon">💨</div>
            <div className="prob-card-title">Qualidade do Ar</div>
            <ul>
              <li>Emissão de gases</li>
              <li>Forte odor</li>
            </ul>
          </div>
          <div className="prob-card reveal">
            <div className="prob-card-icon">🌿</div>
            <div className="prob-card-title">Biodiversidade</div>
            <ul>
              <li>Morte de seres aquáticos</li>
              <li>Danos ao ecossistema e plantas</li>
            </ul>
          </div>
          <div className="prob-card reveal">
            <div className="prob-card-icon">💧</div>
            <div className="prob-card-title">Água</div>
            <ul>
              <li>Contaminação dos lençóis freáticos, rios e lagoas</li>
            </ul>
          </div>
          <div className="prob-card reveal">
            <div className="prob-card-icon">🏥</div>
            <div className="prob-card-title">Saúde Pública</div>
            <ul>
              <li>Afeta células nervosas</li>
              <li>Inibidor das células na cadeia respiratória</li>
            </ul>
          </div>
        </div>
        <div className="prob-stat reveal">
          <strong>Por que a manipueira deve ser abordada como um problema?</strong>
          <br />
          <br />
          Em Pernambuco no ano de 2023 foram produzidos aproximadamente 65.592.500 litros de manipueira segundo o IBGE.
        </div>
      </section>

      <section id="produtos">
        <div className="produtos-header reveal">
          <h2 className="section-title">
            CONHEÇA NOSSOS
            <br />
            PRODUTOS.
          </h2>
        </div>
        <div className="produtos-grid">
          <div className="produto-card reveal">
            <div className="produto-img-placeholder">🌱</div>
            <div className="produto-body">
              <div className="produto-nome">Biodigestor</div>
            </div>
          </div>
          <div className="produto-card reveal">
            <div className="produto-img-placeholder">🔥</div>
            <div className="produto-body">
              <div className="produto-nome">Biogás</div>
            </div>
          </div>
          <div className="produto-card reveal">
            <div className="produto-img-placeholder">🌾</div>
            <div className="produto-body">
              <div className="produto-nome">Biofertilizante e Transportação de Manipueira</div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferecemos">
        <div className="reveal">
          <h2 className="section-title">
            O que
            <br />
            oferecemos?
          </h2>
          <p className="section-body">
            Soluções sustentáveis que transformam o resíduo da mandioca em produtos de alto valor agregado, beneficiando o meio ambiente e as comunidades locais.
          </p>
        </div>
        <div className="oferecemos-grid">
          <div className="oferta-item reveal">
            <div className="oferta-icon">♻️</div>
            <div className="oferta-label">Tratamento e reaproveitamento da manipueira</div>
          </div>
          <div className="oferta-item reveal">
            <div className="oferta-icon">⚡</div>
            <div className="oferta-label">Geração de energia por meio de biogás</div>
          </div>
          <div className="oferta-item reveal">
            <div className="oferta-icon">🌱</div>
            <div className="oferta-label">Biofertilizantes para agricultura</div>
          </div>
          <div className="oferta-item reveal">
            <div className="oferta-icon">🚛</div>
            <div className="oferta-label">Logística e transporte sustentável</div>
          </div>
        </div>
      </section>

      <section id="time">
        <div className="time-header reveal">
          <h2 className="section-title">
            CONHEÇA NOSSO
            <br />
            TIME
          </h2>
          <p className="section-body time-intro">
            As pessoas por trás do projeto Manivis — comprometidas com inovação e sustentabilidade.
          </p>
        </div>
        <div className="time-grid">
          {/* Gabriel */}
          <article className="time-card reveal">
            <div className="time-photo-wrap">
              <Image
                className="time-photo"
                src="/fota.jpg"
                alt="Gabriel Lucas"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <div className="time-body">
              <h3 className="time-name">Gabriel Lucas</h3>
              <p className="time-role">Desenvolvimento</p>
              <div className="time-socials">
                <a
                  href="https://www.linkedin.com/in/gabriellucasafb/"
                  className="social-link"
                  aria-label="LinkedIn de Gabriel Lucas"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gabriellucasafb/"
                  className="social-link"
                  aria-label="Instagram de Gabriel Lucas"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          {/* Kawan */}
          <article className="time-card reveal">
            <div className="time-photo-wrap">
              <Image
                className="time-photo"
                src="/1772452217816.jpg"
                alt="Antonio Kawan"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <div className="time-body">
              <h3 className="time-name">Antonio Kawan</h3>
              <p className="time-role">Desenvolvimento</p>
              <div className="time-socials">
                <a
                  href="https://www.linkedin.com/in/antonio-kawan-freitas/"
                  className="social-link"
                  aria-label="LinkedIn de Antonio Kawan"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kawanfreitas_/"
                  className="social-link"
                  aria-label="Instagram de Antonio Kawan"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          {/* Marcos */}
          <article className="time-card reveal">
            <div className="time-photo-wrap">
              <Image
                className="time-photo"
                src="/marcos.jpg"
                alt="Marcos Antunes"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <div className="time-body">
              <h3 className="time-name">Marcos Antunes</h3>
              <p className="time-role">Engenheiro</p>
              <div className="time-socials">
                <a
                  href="https://www.linkedin.com/in/marcos-antunes-b1bb693a7/"
                  className="social-link"
                  aria-label="LinkedIn de Marcos Antunes"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/antunes__marcos"
                  className="social-link"
                  aria-label="Instagram de Marcos Antunes"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Ingryd */}
          <article className="time-card reveal">
            <div className="time-photo-wrap">
              <Image
                className="time-photo"
                src="/INGRYD.jpeg"
                alt="Ingryd Dias"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <div className="time-body">
              <h3 className="time-name">Ingryd Dias</h3>
              <p className="time-role">Engenheira</p>
              <div className="time-socials">
                <a
                  href="https://www.linkedin.com/in/ingryd-dias-b769592a4/"
                  className="social-link"
                  aria-label="LinkedIn de Ingryd Dias"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ingryd.diasc"
                  className="social-link"
                  aria-label="Instagram de Ingryd Dias"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Clara */}
          <article className="time-card reveal">
            <div className="time-photo-wrap">
              <Image
                className="time-photo"
                src="/CLARA.jpeg"
                alt="Clara Vitória"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <div className="time-body">
              <h3 className="time-name">Clara Vitória</h3>
              <p className="time-role">Engenheira</p>
              <div className="time-socials">
                <a
                  href="https://www.linkedin.com/in/clara-vitória5413243ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="social-link"
                  aria-label="LinkedIn de Clara Vitória"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/claravitoria_ls?igsh=MWYxZTExYnVtbm5h"
                  className="social-link"
                  aria-label="Instagram de Clara Vitória"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="footer-logo">MANIVIS</div>
          <div className="footer-tagline">© 2024 Manivis · Transformando resíduo em riqueza</div>
          <div className="footer-socials" aria-label="Redes sociais Manivis">
            {/* Se o URL do LinkedIn da empresa for outro, altere o href abaixo. */}
            <a
              href="https://www.linkedin.com/company/manivispe"
              className="social-link"
              aria-label="LinkedIn da Manivis"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/manivispe"
              className="social-link"
              aria-label="Instagram da Manivis"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-credits">
          Desenvolvido por{' '}
          <a href="https://github.com/sougabrielxd" target="_blank" rel="noopener noreferrer">
            Gabriel Lucas
          </a>{' '}
          e{' '}
          <a href="https://github.com/kawan74" target="_blank" rel="noopener noreferrer">
            Antonio Kawan
          </a>
        </div>
      </footer>
    </>
  );
}
