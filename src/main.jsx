
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
  BarChart3,
  PieChart,
  CalendarDays,
  Zap,
  LockKeyhole,
  Play,
  CheckCircle2
} from "lucide-react";

import "./styles.css";

const plans = [
  {
    name: "Essencial",
    price: "89",
    description: "Para organizar a rotina financeira e ganhar clareza.",
    features: [
      "Fluxo de caixa completo",
      "Contas a pagar e receber",
      "Conciliação manual",
      "Relatórios essenciais",
      "1 usuário"
    ],
    action: "Começar agora"
  },
  {
    name: "Profissional",
    price: "149",
    popular: true,
    description: "Para empresas em crescimento que precisam de visão.",
    features: [
      "Tudo do Essencial",
      "Dashboard inteligente",
      "Relatórios avançados",
      "Categorias personalizadas",
      "Até 5 usuários",
      "Suporte prioritário"
    ],
    action: "Quero o Profissional"
  },
  {
    name: "Escala",
    price: "289",
    description: "Mais controle, colaboração e visão para operações maiores.",
    features: [
      "Tudo do Profissional",
      "Até 15 usuários",
      "Centros de custo",
      "Exportação de relatórios",
      "Acompanhamento dedicado"
    ],
    action: "Falar com especialista"
  }
];

const faqs = [
  {
    question: "Preciso ter conhecimento financeiro para usar a NEXORA?",
    answer:
      "Não. A plataforma foi pensada para simplificar a rotina. Os painéis e indicadores são apresentados de forma visual e fácil de entender."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Os planos são mensais e você pode solicitar o cancelamento quando desejar, sem fidelidade."
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "A segurança é uma prioridade no projeto. A plataforma foi idealizada com controle de acesso e boas práticas de proteção de dados."
  },
  {
    question: "Existe período de teste?",
    answer:
      "Você pode solicitar uma demonstração gratuita para conhecer os principais recursos antes de escolher um plano."
  },
  {
    question: "A NEXORA substitui meu contador?",
    answer:
      "Não. A NEXORA ajuda na organização e no acompanhamento financeiro da empresa, mas não substitui serviços contábeis ou orientação profissional."
  }
];

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="NEXORA início">
      <span className="logo-mark"><span /></span>
      <span>NEXORA</span>
    </a>
  );
}

function Button({ children, href = "#contato", secondary = false }) {
  return (
    <a className={`btn ${secondary ? "btn-secondary" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-wrap">
      <div className="glow-orb" />

      <div className="dash-window">
        <div className="dash-top">
          <div className="window-dots">
            <i /><i /><i />
          </div>
          <span>Visão geral</span>
          <div className="dash-avatar">JL</div>
        </div>

        <div className="dash-content">
          <aside className="dash-side">
            <div className="mini-brand">N<span>✦</span></div>
            <div className="side-active"><BarChart3 /></div>
            <Wallet />
            <CreditCard />
            <PieChart />
            <CalendarDays />
          </aside>

          <div className="dash-main">
            <div className="dash-heading">
              <div>
                <small>QUARTA-FEIRA, 25 DE NOVEMBRO</small>
                <h3>Bom dia! 👋</h3>
                <p>Aqui está o resumo da sua empresa.</p>
              </div>
              <span className="period">Últimos 30 dias⌄</span>
            </div>

            <div className="metric-grid">
              <div className="metric">
                <small>Saldo em caixa</small>
                <strong>R$ 48.290,00</strong>
                <em><TrendingUp size={13} /> 12,8%</em>
              </div>
              <div className="metric">
                <small>Receitas</small>
                <strong>R$ 32.450,00</strong>
                <em><TrendingUp size={13} /> 8,2%</em>
              </div>
              <div className="metric">
                <small>Despesas</small>
                <strong>R$ 18.760,00</strong>
                <em className="negative">↓ 3,4%</em>
              </div>
            </div>

            <div className="dash-lower">
              <div className="chart-card">
                <div className="chart-title">
                  <b>Fluxo de caixa</b>
                  <small>Entradas x saídas</small>
                </div>

                <div className="chart-legend">
                  <span><i /> Entradas</span>
                  <span><i /> Saídas</span>
                </div>

                <div className="chart">
                  <div className="chart-lines">
                    <i /><i /><i /><i />
                  </div>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#8b7bff" stopOpacity=".28" />
                        <stop offset="1" stopColor="#8b7bff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 115 C40 105 45 75 90 87 S145 110 180 65 S230 80 270 48 S320 72 360 35 S420 50 500 15 L500 150 L0 150Z"
                      fill="url(#area)"
                    />
                    <path
                      d="M0 115 C40 105 45 75 90 87 S145 110 180 65 S230 80 270 48 S320 72 360 35 S420 50 500 15"
                      fill="none"
                      stroke="#9889ff"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="months">
                  <span>01 Nov</span>
                  <span>07 Nov</span>
                  <span>14 Nov</span>
                  <span>21 Nov</span>
                  <span>30 Nov</span>
                </div>
              </div>

              <div className="goal-card">
                <div className="goal-icon"><TrendingUp size={19} /></div>
                <small>Meta de receita</small>
                <strong>76%</strong>
                <p>Você está perto da sua meta mensal.</p>
                <div className="progress"><i /></div>
                <small>R$ 38.000 de R$ 50.000</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="float-note">
        <span><CheckCircle2 size={17} /></span>
        <div>
          <b>Visão clara, decisões melhores</b>
          <small>Seus números em um só lugar</small>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="header">
        <div className="container nav">
          <Logo />

          <nav className={menu ? "nav-open" : ""}>
            <a href="#beneficios" onClick={() => setMenu(false)}>Benefícios</a>
            <a href="#recursos" onClick={() => setMenu(false)}>Recursos</a>
            <a href="#planos" onClick={() => setMenu(false)}>Planos</a>
            <a href="#faq" onClick={() => setMenu(false)}>Dúvidas</a>
          </nav>

          <div className="nav-actions">
            <a className="login" href="#contato">Entrar</a>
            <Button>Começar agora</Button>
          </div>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Abrir menu"
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-grid" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                GESTÃO FINANCEIRA SEM COMPLICAÇÃO
              </div>

              <h1>
                Sua empresa cresce.
                <span> Seu controle</span> acompanha.
              </h1>

              <p className="hero-sub">
                Tenha clareza sobre cada entrada, saída e oportunidade.
                Organize suas finanças e tome decisões com mais confiança —
                tudo em um só lugar.
              </p>

              <div className="hero-buttons">
                <Button>Quero conhecer a NEXORA</Button>
                <a className="text-link" href="#recursos">
                  <span className="play"><Play size={13} fill="currentColor" /></span>
                  Conheça a plataforma
                </a>
              </div>

              <div className="hero-proof">
                <div className="avatar-stack">
                  <i>MC</i><i>RA</i><i>PL</i><i>+</i>
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <small>Feita para simplificar a gestão de quem empreende</small>
                </div>
              </div>
            </div>

            <Dashboard />
          </div>

          <div className="hero-bottom">
            <span>MENOS PLANILHAS. MAIS VISÃO.</span>
            <span>GESTÃO QUE ACOMPANHA SEU RITMO <ArrowRight size={14} /></span>
          </div>
        </section>

        {/* BENEFÍCIOS DE CONFIANÇA */}
        <section className="trust-strip">
          <div className="container trust-inner">
            <span>UMA NOVA FORMA DE OLHAR PARA O SEU NEGÓCIO</span>
            <div>
              <b><ShieldCheck /> Segurança em primeiro lugar</b>
              <b><Clock3 /> Mais tempo para o que importa</b>
              <b><TrendingUp /> Decisões com confiança</b>
            </div>
          </div>
        </section>

        {/* PROBLEMA E SOLUÇÃO */}
        <section className="section problem" id="beneficios">
          <div className="container two-col">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                O CUSTO DA FALTA DE VISÃO
              </div>
              <h2>
                Você não abriu uma empresa para passar o dia
                <span> apagando incêndios.</span>
              </h2>
            </div>

            <div className="problem-copy">
              <p>
                Planilhas espalhadas, números que não fecham e decisões
                tomadas no escuro. Quando a gestão financeira vira um
                quebra-cabeça, sobra pouco tempo para fazer o negócio avançar.
              </p>
              <p>
                A NEXORA reúne as informações que importam em uma experiência
                simples, visual e organizada.
              </p>
              <a className="inline-link" href="#recursos">
                Veja como funciona <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="container benefit-cards">
            <article className="benefit-card">
              <div className="card-icon"><Wallet /></div>
              <h3>Controle em tempo real</h3>
              <p>
                Acompanhe entradas, saídas e saldo sem depender de várias
                planilhas.
              </p>
            </article>

            <article className="benefit-card">
              <div className="card-icon"><BarChart3 /></div>
              <h3>Decisões mais seguras</h3>
              <p>
                Transforme dados financeiros em informações que ajudam a
                planejar os próximos passos.
              </p>
            </article>

            <article className="benefit-card">
              <div className="card-icon"><Zap /></div>
              <h3>Rotina simplificada</h3>
              <p>
                Centralize tarefas financeiras e tenha mais tempo para cuidar
                do seu negócio.
              </p>
            </article>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="section platform" id="recursos">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> TUDO CONECTADO
              </div>
              <h2>
                O financeiro da sua empresa,
                <br />
                <span>finalmente no mesmo ritmo.</span>
              </h2>
              <p>
                Uma visão completa para você sair do operacional e enxergar
                o que vem pela frente.
              </p>
            </div>

            <div className="platform-showcase">
              <div className="platform-text">
                <div className="feature">
                  <div className="feature-icon"><PieChart /></div>
                  <div>
                    <h3>Um painel que fala a sua língua</h3>
                    <p>
                      Visualize indicadores, acompanhe tendências e entenda
                      a saúde financeira da empresa sem complicação.
                    </p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon"><CalendarDays /></div>
                  <div>
                    <h3>Contas organizadas, prazos visíveis</h3>
                    <p>
                      Saiba o que vence, o que entrou e o que precisa de
                      atenção. Sua rotina financeira em ordem.
                    </p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon"><Sparkles /></div>
                  <div>
                    <h3>Relatórios para olhar adiante</h3>
                    <p>
                      Compare períodos, acompanhe resultados e planeje com
                      base em informações organizadas.
                    </p>
                  </div>
                </div>

                <Button>Quero ver uma demonstração</Button>
              </div>

              <div className="insight-panel">
                <div className="insight-header">
                  <div>
                    <small>ANÁLISE FINANCEIRA</small>
                    <h3>Seu negócio em perspectiva</h3>
                  </div>
                  <span className="live-tag"><i /> DEMONSTRAÇÃO</span>
                </div>

                <div className="insight-total">
                  <small>Resultado do período</small>
                  <strong>R$ 13.690,00</strong>
                  <span><TrendingUp size={14} /> +18,6% em relação ao período anterior</span>
                </div>

                <div className="bar-labels">
                  <span>Receitas</span><b>R$ 32.450</b>
                </div>
                <div className="bar-track"><i className="bar-purple" /></div>

                <div className="bar-labels">
                  <span>Despesas</span><b>R$ 18.760</b>
                </div>
                <div className="bar-track"><i className="bar-blue" /></div>

                <div className="insight-bottom">
                  <div>
                    <small>Saldo projetado</small>
                    <b>R$ 52.840</b>
                  </div>
                  <div>
                    <small>Contas em aberto</small>
                    <b>08 <span>itens</span></b>
                  </div>
                  <div>
                    <small>Fluxo mensal</small>
                    <b className="positive">Positivo</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section steps">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                SIMPLES DESDE O PRIMEIRO ACESSO
              </div>
              <h2>
                Comece a ter clareza em <span>três passos.</span>
              </h2>
            </div>

            <div className="steps-grid">
              <article>
                <span>01</span>
                <div className="step-line" />
                <h3>Conheça a plataforma</h3>
                <p>
                  Solicite uma demonstração e veja como a NEXORA se encaixa
                  na sua rotina.
                </p>
              </article>

              <article>
                <span>02</span>
                <div className="step-line" />
                <h3>Organize suas informações</h3>
                <p>
                  Configure sua estrutura financeira e reúna seus dados em
                  um só lugar.
                </p>
              </article>

              <article>
                <span>03</span>
                <div className="step-line" />
                <h3>Decida com confiança</h3>
                <p>
                  Acompanhe seus indicadores e tenha mais clareza para
                  conduzir o negócio.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section className="section pricing" id="planos">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                PLANOS PARA CADA MOMENTO
              </div>
              <h2>
                O próximo passo do seu negócio
                <br />
                <span>começa com clareza.</span>
              </h2>
              <p>
                Escolha o nível de controle que faz sentido para sua empresa.
              </p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card ${plan.popular ? "featured" : ""}`}
                  key={plan.name}
                >
                  {plan.popular && (
                    <div className="popular-label">
                      <Sparkles size={13} /> MAIS ESCOLHIDO
                    </div>
                  )}

                  <div className="plan-name">{plan.name}</div>
                  <p>{plan.description}</p>

                  <div className="price">
                    <small>R$</small>
                    <strong>{plan.price}</strong>
                    <span>/mês</span>
                  </div>

                  <small className="billing">
                    Cobrança mensal. Cancele quando quiser.
                  </small>

                  <a
                    href="#contato"
                    className={`btn ${plan.popular ? "" : "btn-secondary"}`}
                  >
                    {plan.action}
                    <ArrowUpRight size={16} />
                  </a>

                  <div className="includes">O que está incluído</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="pricing-note">
              Valores e recursos apresentados como demonstração de um produto fictício.
            </p>
          </div>
        </section>

        {/* MENSAGEM DE MARCA */}
        <section className="section quote">
          <div className="container quote-inner">
            <div className="quote-mark">“</div>
            <div>
              <h2>
                Gestão financeira não precisa ser complicada.
                <span> Precisa fazer sentido.</span>
              </h2>
              <p>
                A NEXORA foi pensada para devolver a você o que mais importa:
                clareza para decidir e tempo para crescer.
              </p>
            </div>
            <div className="quote-orb" />
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq" id="faq">
          <div className="container faq-layout">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" /> AINDA TEM DÚVIDAS?
              </div>
              <h2>
                Respostas claras.
                <br />
                <span>Como deve ser.</span>
              </h2>
              <p>Se sua dúvida não estiver aqui, fale com nosso time.</p>
              <a className="inline-link" href="#contato">
                Falar com a equipe <ArrowRight size={16} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={19} />
                  </button>

                  {openFaq === index && <p>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section contact" id="contato">
          <div className="container contact-box">
            <div className="contact-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> SEU PRÓXIMO PASSO
              </div>

              <h2>
                Chega de gerir no escuro.
                <span> Vamos conversar?</span>
              </h2>

              <p>
                Peça uma demonstração e descubra como ter uma visão mais
                clara das finanças da sua empresa.
              </p>

              <div className="contact-promise">
                <CheckCircle2 /> Sem compromisso
                <CheckCircle2 /> Demonstração guiada
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <h3>Solicite uma demonstração</h3>
              <p>
                Preencha os dados e nossa equipe entrará em contato.
              </p>

              {sent ? (
                <div className="success-message">
                  <CheckCircle2 size={28} />
                  <b>Solicitação recebida!</b>
                  <span>
                    Esta é uma demonstração de formulário.
                    Nenhum dado foi enviado.
                  </span>
                  <button type="button" onClick={() => setSent(false)}>
                    Enviar novamente
                  </button>
                </div>
              ) : (
                <>
                  <label>
                    Seu nome
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Como podemos chamar você?"
                    />
                  </label>

                  <label>
                    E-mail profissional
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="voce@empresa.com"
                    />
                  </label>

                  <label>
                    Nome da empresa
                    <input
                      required
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Sua empresa"
                    />
                  </label>

                  <button className="btn form-submit" type="submit">
                    Quero minha demonstração
                    <ArrowUpRight size={17} />
                  </button>

                  <small className="privacy">
                    <LockKeyhole size={12} />
                    Seus dados são usados apenas para contato nesta demonstração.
                  </small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Logo />
            <p>
              Mais clareza para gerir.
              <br />
              Mais confiança para crescer.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <b>Explorar</b>
              <a href="#beneficios">Benefícios</a>
              <a href="#recursos">Recursos</a>
              <a href="#planos">Planos</a>
            </div>

            <div>
              <b>Ajuda</b>
              <a href="#faq">Perguntas frequentes</a>
              <a href="#contato">Fale conosco</a>
            </div>

            <div>
              <b>Contato</b>
              <a href="#contato">Solicitar demonstração</a>
              <a href="mailto:ola@nexora.exemplo">ola@nexora.exemplo</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 NEXORA. Projeto demonstrativo fictício.</span>
          <span>Feito para simplificar a gestão.</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
