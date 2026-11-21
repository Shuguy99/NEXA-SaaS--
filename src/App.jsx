import { useState } from 'react'

const Icon = ({ name, size = 22 }) => {
  const paths = {
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m7 15 4-5 3 3 5-7" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    spark: <><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" /><path d="M19 16v4M17 18h4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const features = [
  { icon: 'zap', title: 'Скорость', text: 'От идеи до работающего прототипа за один день, а не за квартал.' },
  { icon: 'layers', title: 'Всё в одном месте', text: 'Задачи, дизайн, аналитика и релизы в едином рабочем пространстве.' },
  { icon: 'chart', title: 'Живая аналитика', text: 'Метрики продукта обновляются в реальном времени, без отчётов вручную.' },
  { icon: 'shield', title: 'Безопасность', text: 'Шифрование, резервные копии и контроль доступа из коробки.' },
  { icon: 'spark', title: 'Умные подсказки', text: 'AI помогает расставить приоритеты и найти узкие места в воронке.' },
  { icon: 'globe', title: 'Команда без границ', text: 'Работайте вместе из любой точки: синхронизация без задержек.' },
]

const steps = [
  { n: '01', title: 'Опишите идею', text: 'Пара предложений — и NEXA соберёт структуру будущего продукта.' },
  { n: '02', title: 'Соберите команду', text: 'Пригласите коллег, распределите роли и начните работать вместе.' },
  { n: '03', title: 'Запускайте', text: 'Опубликуйте результат и следите за метриками с первого дня.' },
]

const plans = [
  { name: 'Starter', monthly: 0, yearly: 0, text: 'Чтобы попробовать', perks: ['1 проект', 'До 3 участников', 'Базовая аналитика', 'Сообщество'] },
  { name: 'Pro', monthly: 2490, yearly: 1990, text: 'Для растущих команд', perks: ['Безлимитные проекты', 'До 20 участников', 'Живая аналитика', 'AI-подсказки', 'Приоритетная поддержка'], featured: true },
  { name: 'Scale', monthly: 5990, yearly: 4790, text: 'Для компаний', perks: ['Всё из Pro', 'Безлимитная команда', 'SSO и роли', 'SLA 99,99%', 'Выделенный менеджер'] },
]

const reviews = [
  { name: 'Анна Ковалёва', role: 'Head of Product, Flow', text: 'Мы сократили время от идеи до релиза в 4 раза. Команда наконец-то видит одну и ту же картину.', initials: 'АК' },
  { name: 'Михаил Орлов', role: 'Founder, Level Up', text: 'Раньше аналитика жила в трёх сервисах. Теперь всё в одном окне, и я принимаю решения быстрее.', initials: 'МО' },
  { name: 'Дарья Смирнова', role: 'CTO, Northwind', text: 'Внедрили за неделю. Безопасность и контроль доступа оказались на том уровне, который мы искали.', initials: 'ДС' },
]

const faqs = [
  { q: 'Можно ли попробовать NEXA бесплатно?', a: 'Да. Тариф Starter навсегда бесплатный: один проект и до трёх участников. Карту привязывать не нужно.' },
  { q: 'Что происходит после окончания пробного периода?', a: 'Проект переключается на тариф Starter. Все данные остаются на месте, ничего не удаляется.' },
  { q: 'Поддерживается ли импорт из других сервисов?', a: 'Да, задачи и файлы импортируются из Trello, Jira, Notion и Figma в пару кликов.' },
  { q: 'Где хранятся данные?', a: 'В дата-центрах в Европе, с шифрованием при передаче и хранении. Ежедневные резервные копии.' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="NEXA — на главную">
          <span className="logo-mark"><span /></span>NEXA
        </a>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Основная навигация">
          <a href="#features" onClick={() => setOpen(false)}>Возможности</a>
          <a href="#how" onClick={() => setOpen(false)}>Как это работает</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Отзывы</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Цены</a>
          <a className="btn btn-small btn-mobile" href="#start">Начать бесплатно</a>
        </nav>
        <a className="btn btn-small header-cta" href="#start">Начать бесплатно <Icon name="arrow" size={17} /></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="badge"><span className="pulse" /> NEXA 2.0 уже доступна <Icon name="arrow" size={14} /></div>
          <h1>Идеи становятся<br /><span className="accent">продуктами быстрее</span></h1>
          <p className="lead">Платформа, где команда планирует, создаёт и запускает продукты. Более 12 000 команд уже выбрали NEXA.</p>
          <div className="hero-actions">
            <a className="btn" href="#start">Начать бесплатно <Icon name="arrow" size={18} /></a>
            <a className="btn btn-ghost" href="#how">Смотреть как это работает</a>
          </div>
          <div className="hero-trust">
            <div className="avatars"><span>АК</span><span>МО</span><span>ДС</span><span>+</span></div>
            <div><strong>4,9 / 5</strong><small>средняя оценка пользователей</small></div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mock-window">
            <div className="mock-bar">
              <i /><i /><i /><span>app.nexa.io/overview</span>
            </div>
            <div className="mock-body">
              <div className="mock-side">
                <div className="mock-logo" />
                {[0, 1, 2, 3, 4].map((i) => <div className="mock-line" key={i} style={{ width: `${55 + (i % 3) * 14}%` }} />)}
              </div>
              <div className="mock-main">
                <div className="mock-heading"><span>Обзор продукта</span><span className="mock-pill">+18%</span></div>
                <div className="mock-cards">
                  <div><small>Задачи</small><strong>128</strong><em>↗ 12%</em></div>
                  <div><small>Релизы</small><strong>24</strong><em>↗ 8%</em></div>
                  <div><small>Команда</small><strong>16</strong><em>↗ 3%</em></div>
                </div>
                <div className="mock-chart">
                  {[28, 46, 38, 62, 52, 78, 68, 92, 84, 100].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="float-card float-one"><span className="float-icon">↗</span><div><small>Конверсия</small><strong>+24,8%</strong></div></div>
          <div className="float-card float-two"><span className="dot" /> Релиз 2.0 опубликован</div>
          <div className="callout callout-a"><b>01</b> Единое пространство</div>
          <div className="callout callout-b"><b>02</b> Живые метрики</div>
          <div className="callout callout-c"><b>03</b> Быстрые релизы</div>
        </div>
      </div>
      <div className="container logos">
        <span>TEAM</span><span>volume</span><span>◈ NORTHWIND</span><span>LevelUp</span><span>flow.</span><span>FORMA</span>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">(01) / Возможности</span>
          <h2>Всё, что нужно команде,<br />в одном рабочем пространстве</h2>
          <p>Меньше инструментов — больше результата. Каждая функция создана, чтобы убрать лишние движения.</p>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="feature-more">Подробнее <Icon name="arrow" size={16} /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">(02) / Как это работает</span>
          <h2>Три шага до запуска</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <article className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">(03) / Отзывы</span>
          <h2>Команды, которые уже растут с NEXA</h2>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="stars">★★★★★</div>
              <p>«{r.text}»</p>
              <div className="review-author">
                <span className="avatar">{r.initials}</span>
                <div><strong>{r.name}</strong><small>{r.role}</small></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(true)
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">(04) / Цены</span>
          <h2>Простой выбор, честные условия</h2>
          <div className="toggle" role="group" aria-label="Период оплаты">
            <button className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>Месяц</button>
            <button className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>Год <span>−20%</span></button>
          </div>
        </div>
        <div className="price-grid">
          {plans.map((p) => (
            <article className={p.featured ? 'price-card featured' : 'price-card'} key={p.name}>
              {p.featured && <span className="popular">Популярный</span>}
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <div className="price">
                {p.monthly === 0 ? '0 ₽' : `${(yearly ? p.yearly : p.monthly).toLocaleString('ru-RU')} ₽`}
                <small>/ мес</small>
              </div>
              {yearly && p.monthly > 0 && <span className="price-note">при оплате за год</span>}
              <a className={p.featured ? 'btn' : 'btn btn-outline'} href="#start">Выбрать {p.name}</a>
              <ul>
                {p.perks.map((perk) => <li key={perk}><Icon name="check" size={16} /> {perk}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [active, setActive] = useState(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="section-head left">
          <span className="eyebrow">(05) / Вопросы и ответы</span>
          <h2>Остались вопросы?</h2>
          <p>Не нашли ответ — напишите нам, и мы ответим в течение рабочего дня.</p>
          <a className="text-link" href="mailto:hello@nexa.example">hello@nexa.example <Icon name="arrow" size={16} /></a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={active === i ? 'faq-item open' : 'faq-item'} key={f.q}>
              <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}>
                {f.q}<span className="plus">{active === i ? '−' : '+'}</span>
              </button>
              {active === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Start() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="cta" id="start">
      <div className="cta-orb" />
      <div className="container cta-inner">
        <h2>Начните создавать<br /><span className="accent">уже сегодня</span></h2>
        <p>Бесплатно, без карты и обязательств. Первый проект — через 5 минут.</p>
        {sent ? (
          <div className="success" role="status" aria-live="polite"><Icon name="check" /> Готово! Письмо со ссылкой отправлено на {email}</div>
        ) : (
          <form className="signup" onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSent(true) }}>
            <input type="email" name="email" autoComplete="email" spellCheck={false} required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Ваш email" />
            <button className="btn" type="submit">Попробовать бесплатно</button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="logo" href="#top"><span className="logo-mark"><span /></span>NEXA</a>
          <p>Платформа для команд, которые создают продукты будущего.</p>
        </div>
        <div className="footer-links">
          <div><strong>Продукт</strong><a href="#features">Возможности</a><a href="#pricing">Цены</a><a href="#how">Как это работает</a></div>
          <div><strong>Компания</strong><a href="#reviews">Отзывы</a><a href="#start">Контакты</a><a href="#top">О нас</a></div>
          <div><strong>Ресурсы</strong><a href="#faq">FAQ</a><a href="#top">Блог</a><a href="#top">Документация</a></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 NEXA. Сделано с заботой о деталях.</span><span>Политика конфиденциальности · Условия</span></div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержимому</a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <How />
        <Reviews />
        <Pricing />
        <Faq />
        <Start />
      </main>
      <Footer />
    </>
  )
}
