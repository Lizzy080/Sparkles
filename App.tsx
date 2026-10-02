import { FormEvent, ReactNode, useState } from "react";
import cleaningHome from "./assets/uploads/cleaning-1.png";
import deepCleaning from "./assets/uploads/cleaning-2.png";
import officeCleaning from "./assets/uploads/cleaning-5.png";
import detailCleaning from "./assets/uploads/cleaning-6.png";
import cleaningSupplies from "./assets/uploads/cleaning-7.png";
import exteriorCleaning from "./assets/uploads/cleaning-8.png";
import windowCleaning from "./assets/uploads/cleaning-4.png";
import quoteCleaning from "./assets/uploads/cleaning-9.png";

const heroImage =
  "https://images.unsplash.com/photo-1758523670739-0d26a3ee976d?auto=format&fit=crop&w=1400&q=85";
const serviceImages = [
  cleaningHome,
  deepCleaning,
  cleaningSupplies,
  officeCleaning,
];

const services = [
  ["Home Cleaning", "Reliable cleaning to keep your home fresh, tidy and comfortable."],
  ["Deep Cleaning", "A thorough clean for spaces that need extra attention."],
  ["Move-In / Move-Out", "Leave your old space spotless or start fresh in your new one."],
  ["Office Cleaning", "Professional cleaning that keeps your workplace fresh and presentable."],
];

const faqs = [
  ["What areas do you serve?", "We serve homes and businesses across our local UK community. Send us your postcode and we'll confirm availability."],
  ["What cleaning services do you offer?", "We offer home, deep, move-in or move-out, and office cleaning, with one-off and regular options."],
  ["How much does cleaning cost?", "Every space is different. Request a free, no-obligation quotation tailored to your property and needs."],
  ["Can I request regular cleaning?", "Yes. Weekly, fortnightly and other regular arrangements are available."],
  ["Can I choose my preferred date and time?", "Yes. Share your preference in the quotation form and we'll confirm availability with you."],
  ["Do I need to provide cleaning supplies?", "No. Our team can bring everything needed, or use your preferred products if requested."],
];

type IconName = "arrow" | "calendar" | "check" | "clock" | "detail" | "home" | "menu" | "office" | "phone" | "shield" | "sparkle" | "star";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    detail: <><path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" /><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" /></>,
    home: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    office: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-2 2c-4-1.4-7.6-5-9-9l2-2-1-4Z" />,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></>,
    sparkle: <><path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ light = false }: { light?: boolean }) {
  return <button className={`logo ${light ? "logo-light" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Sparkles home">
    <span className="logo-mark"><Icon name="sparkle" size={18} /></span><span>sparkles.</span>
  </button>;
}

function Button({ children, onClick, type = "button", secondary = false, disabled = false }: {
  children: ReactNode; onClick?: () => void; type?: "button" | "submit"; secondary?: boolean; disabled?: boolean;
}) {
  return <button type={type} className={`button ${secondary ? "button-secondary" : ""}`} onClick={onClick} disabled={disabled}>{children}</button>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span /><>{children}</></p>;
}

type PageName = "home" | "why" | "services" | "process" | "faq";

function Landing({ openQuote, navigate }: { openQuote: (service?: string) => void; navigate: (page: PageName) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="site-shell">
    <header className="nav wrap">
      <Logo />
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        <button onClick={() => { navigate("why"); setMenuOpen(false); }}>Why us</button>
        <button onClick={() => { navigate("services"); setMenuOpen(false); }}>Services</button>
        <button onClick={() => { navigate("process"); setMenuOpen(false); }}>How it works</button>
        <button onClick={() => { navigate("faq"); setMenuOpen(false); }}>FAQ</button>
        <span className="mobile-quote"><Button onClick={() => openQuote()}>Get a Free Quotation</Button></span>
      </nav>
      <span className="desktop-quote"><Button onClick={() => openQuote()}>Get a Free Quotation</Button></span>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><Icon name="menu" size={24} /></button>
    </header>

    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <Eyebrow>Professional cleaning</Eyebrow>
          <h1>A cleaner home<br />without the <em>stress.</em></h1>
          <p>Professional cleaning for homes and businesses in your local community, delivered with care.</p>
          <div className="hero-actions"><Button onClick={() => openQuote()}>Get a Free Quotation</Button></div>
          <div className="trust-row"><span><i><Icon name="shield" size={16} /></i> Fully insured</span><span><i><Icon name="home" size={16} /></i> Trusted local team</span><span><i><Icon name="calendar" size={16} /></i> Flexible bookings</span><span className="rating"><i><Icon name="star" size={15} /></i><span>4.9 customer rating</span></span></div>
        </div>
        <div className="hero-visual">
          <video autoPlay muted loop playsInline poster={heroImage} aria-label="A professional cleaner transforming a bright living space">
            <source src="https://cdn.coverr.co/videos/coverr-woman-cleaning-the-floor-1575/1080p.mp4" type="video/mp4" />
          </video>
          <div className="hero-badge"><span><Icon name="sparkle" /></span><div><b>Fresh space, fresh start</b><small>Thoughtful cleaning, every time</small></div></div>
          <i className="bubble bubble-one" /><i className="bubble bubble-two" />
        </div>
      </section>

      <section id="why" className="section soft-section">
        <div className="wrap">
          <div className="why-heading centered">
            <Eyebrow>Why Sparkles</Eyebrow>
            <h2>Trusted by homes,<br />loved for our care.</h2>
          </div>
          <div className="why-layout">
            <div className="why-images"><img src={windowCleaning} alt="Professionals carefully cleaning office windows" /><img src={detailCleaning} alt="A gloved cleaner carefully wiping a surface" loading="lazy" /></div>
            <div className="why-content"><div className="why-intro"><p>It isn't only about a spotless result. We bring dependable people, thoughtful service and attention to every detail, so your space feels genuinely cared for.</p><Button onClick={() => navigate("why")}>Learn why families choose us</Button></div><div className="why-features">{[
              ["shield", "Trusted professionals", "Experienced, vetted cleaners you can feel comfortable welcoming in."],
              ["detail", "Thoughtful products", "Effective cleaning choices selected with your space in mind."],
              ["clock", "On-time guarantee", "We respect your schedule and arrive when expected."],
              ["calendar", "Flexible service", "Cleaning options designed around your home or workplace."],
            ].map(([icon, title, text]) => <article key={title}><div className="mini-icon"><Icon name={icon as IconName} size={19} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="section wrap">
        <div className="section-heading centered"><Eyebrow>Our services</Eyebrow><h2>Cleaning that fits your needs.</h2><p>From a regular refresh to a thorough deep clean, we'll help your space feel its best.</p></div>
        <div className="service-grid">
          {services.map(([title, text], i) => <article className="service-card" key={title}>
            <div className="service-image"><img src={serviceImages[i]} alt={`${title} in a bright, cared-for space`} loading="lazy" /><span><Icon name={i === 3 ? "office" : "home"} /></span></div>
            <div className="service-body"><h3>{title}</h3><p>{text}</p><ul><li><Icon name="check" size={15} /> Tailored to your space</li><li><Icon name="check" size={15} /> Trusted local professionals</li></ul><button className="service-quote" onClick={() => openQuote(title)}>Get a quotation</button></div>
          </article>)}
        </div>
      </section>

      <section id="how" className="section how-section">
        <div className="wrap">
          <div className="section-heading centered how-heading"><Eyebrow>How it works</Eyebrow><h2>Getting a clean space is simple.</h2><p>Tell us what you need and we'll take care of the rest — no complicated process, no hidden steps.</p></div>
          <div className="steps">
            {[
              ["01", "Tell us what you need", "Share a few details about your cleaning requirements."],
              ["02", "Get your free quotation", "We'll review your request and provide your quotation."],
              ["03", "Choose a convenient time", "Confirm a cleaning date and time that works for you."],
            ].map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
          <div className="how-action"><Button onClick={() => openQuote()}>Get a Quotation</Button></div>
        </div>
      </section>

      <section className="section wrap testimonials">
        <div className="section-heading centered"><Eyebrow>Kind words</Eyebrow><h2>Loved by local customers.</h2></div>
        <div className="testimonial-grid">
          {[
            ["Sarah M.", "Busy parent · Bristol", "“Sparkles makes our home feel calm again. The team is always punctual, friendly and incredibly thorough.”", "https://images.unsplash.com/photo-1548336614-9dbab95656ff?auto=format&fit=crop&w=160&q=80"],
            ["James R.", "Homeowner · Bath", "“The attention to detail is excellent. Booking was simple and the whole service felt genuinely professional.”", "https://images.unsplash.com/photo-1741241290790-0b69e17888da?auto=format&fit=crop&w=160&q=80"],
            ["Priya D.", "Office manager · Bristol", "“A dependable team who keep our workspace fresh and ready for the week. I wouldn't hesitate to recommend them.”", "https://images.unsplash.com/photo-1666667018808-f52c81c2fb09?auto=format&fit=crop&w=160&q=80"],
          ].map(([name, meta, quote, image]) => <article className="testimonial-card" key={name}><div className="stars">★★★★★</div><blockquote>{quote}</blockquote><div className="person"><img src={image} alt="" loading="lazy" /><div><b>{name}</b><small>{meta}</small></div></div></article>)}
        </div>
        <p className="fiction-note">Sample customer stories shown for portfolio purposes.</p>
      </section>

      <section id="faq" className="section faq-section">
        <div className="wrap"><div className="section-heading centered"><Eyebrow>Good to know</Eyebrow><h2>Frequently asked questions.</h2><p>Can't find what you need? Get in touch and our friendly team will be happy to help.</p></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="section wrap">
        <div className="final-cta"><div className="cta-sparkle"><Icon name="sparkle" size={36} /></div><div className="final-cta-content"><Eyebrow>Let's get started</Eyebrow><h2>Ready for a space<br />that sparkles?</h2><p>Get your free quotation and let us take care of the cleaning.</p><Button onClick={() => openQuote()}>Get a Free Quotation</Button></div></div>
      </section>
    </main>

    <footer>
      <div className="wrap footer-top"><div className="footer-brand"><Logo light /><p>A cleaner home without the stress. Thoughtful, dependable cleaning for homes and businesses in our local community.</p><a className="footer-phone" href="tel:+441234567890"><Icon name="phone" /> +44 (0) 1234 567 890</a></div><div><h4>Explore</h4><button onClick={() => navigate("services")}>Services</button><button onClick={() => navigate("why")}>Why Sparkles</button><button onClick={() => navigate("process")}>How it works</button><button onClick={() => navigate("faq")}>FAQ</button></div><div><h4>Contact</h4><a href="mailto:hello@sparkles.co.uk">hello@sparkles.co.uk</a><a href="https://wa.me/441234567890">WhatsApp</a><span>Mon–Fri · 8am–6pm</span><span>Local UK community</span></div></div>
      <div className="footer-word">sparkles.</div>
      <div className="wrap footer-bottom"><span>© 2026 Sparkles Cleaning Services.</span><span>Made with care for cleaner spaces.</span></div>
    </footer>
  </div>;
}

const pageContent = {
  why: {
    eyebrow: "Why Sparkles",
    title: "Care you can see. Quality you can feel.",
    intro: "Inviting someone into your home or workplace requires trust. That's why our service is built around dependable people, clear communication and consistently thoughtful work.",
  },
  services: {
    eyebrow: "Our services",
    title: "The right clean for every space.",
    intro: "Whether you need help keeping on top of the everyday or a complete reset, we tailor the service to your space, schedule and priorities.",
  },
  process: {
    eyebrow: "How it works",
    title: "From request to refresh, made simple.",
    intro: "A clear, no-pressure process with no hidden steps. Tell us what matters, receive your tailored quotation and choose a convenient time.",
  },
  faq: {
    eyebrow: "Help centre",
    title: "Clear answers before we begin.",
    intro: "Everything you need to know about our services, quotations and what to expect from your Sparkles clean.",
  },
};

function InfoPage({ page, navigate, openQuote }: { page: Exclude<PageName, "home">; navigate: (page: PageName) => void; openQuote: (service?: string) => void }) {
  const copy = pageContent[page];
  return <div className="subpage">
    <header className="nav wrap subpage-nav"><Logo /><nav className="nav-links"><button onClick={() => navigate("home")}>Home</button><button onClick={() => navigate("services")}>Services</button><button onClick={() => navigate("why")}>Why us</button><button onClick={() => navigate("process")}>How it works</button><button onClick={() => navigate("faq")}>FAQ</button></nav><Button onClick={() => openQuote()}>Get a Free Quotation</Button></header>
    <main>
      <section className="subpage-hero"><div className="wrap"><Eyebrow>{copy.eyebrow}</Eyebrow><h1>{copy.title}</h1><p>{copy.intro}</p></div></section>
      {page === "services" && <section className="section wrap"><div className="detail-list">{services.map(([title, text], i) => <article className="detail-card" key={title}><div><span>0{i + 1}</span><div className="icon-box"><Icon name={i === 3 ? "office" : "home"} /></div><h2>{title}</h2><p>{text} We shape every visit around your property, priorities and preferred frequency.</p><ul><li><Icon name="check" /> Kitchens, bathrooms and living areas</li><li><Icon name="check" /> Floors, surfaces and finishing details</li><li><Icon name="check" /> Flexible one-off or regular arrangements</li></ul><Button onClick={() => openQuote(title)}>Get a quotation</Button></div><img src={serviceImages[i]} alt={`${title} service`} /></article>)}</div></section>}
      {page === "why" && <section className="section wrap"><div className="page-values">{[["shield", "People you can trust", "Our cleaners are carefully selected, experienced and fully insured, so you can feel confident in who enters your space."],["clock", "Dependability built in", "We value your time, communicate clearly and arrive when expected. If anything changes, you will always know."],["detail", "A genuinely thorough clean", "We notice the small things. Our team follows a considered process while adapting to the details that matter to you."],["calendar", "Made to fit your life", "From one-off deep cleans to regular care, your service is organised around your space and routine."]].map(([icon,title,text]) => <article key={title}><div className="icon-box"><Icon name={icon as IconName} /></div><h2>{title}</h2><p>{text}</p></article>)}</div><div className="page-promise"><img src={quoteCleaning} alt="A professional completing the finishing details of an office clean" /><div><Eyebrow>Our promise</Eyebrow><h2>We treat your space with the care we'd expect in our own.</h2><p>That means respectful service, careful attention to your requests and a result that helps your space feel calmer, fresher and ready to enjoy.</p><Button onClick={() => openQuote()}>Get a Free Quotation</Button></div></div></section>}
      {page === "process" && <section className="section wrap"><div className="process-timeline">{[["01","Share your requirements","Complete our short quotation form with your contact details, the kind of cleaning you need and a little about your space."],["02","Receive a tailored quotation","Our team reviews your request and contacts you through WhatsApp with a clear quotation based on the details provided."],["03","Agree a convenient time","Choose a suitable date and time with our team. Your requested time remains a preference until we confirm it."],["04","Enjoy a fresher space","Our friendly professionals arrive prepared and complete the agreed clean with care and close attention to detail."]].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div><div className="page-cta"><h2>Ready to tell us what you need?</h2><p>It only takes a few minutes to request your free quotation.</p><Button onClick={() => openQuote()}>Get a Free Quotation</Button></div></section>}
      {page === "faq" && <section className="section wrap"><div className="faq-list subpage-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div><div className="page-cta"><h2>Still have a question?</h2><p>Our friendly team will be happy to talk through your cleaning needs.</p><a className="button" href="mailto:hello@sparkles.co.uk">Email our team</a></div></section>}
    </main>
  </div>;
}

type FormData = { name: string; phone: string; email: string; service: string; address: string; propertyType: string; bedrooms: string; bathrooms: string; frequency: string; spaceDetails: string; date: string; time: string; notes: string };
const emptyForm: FormData = { name: "", phone: "", email: "", service: "", address: "", propertyType: "", bedrooms: "", bathrooms: "", frequency: "", spaceDetails: "", date: "", time: "", notes: "" };

function Quote({ initialService, close }: { initialService: string; close: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({ ...emptyForm, service: initialService });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"editing" | "loading" | "success">("editing");
  const update = (field: keyof FormData, value: string) => setForm({ ...form, [field]: value });

  const validate = (fields: (keyof FormData)[]) => {
    const next: Record<string, boolean> = {};
    fields.forEach((field) => { if (!form[field].trim()) next[field] = true; });
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) next.email = true;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) setTimeout(() => document.getElementById(first)?.focus(), 0);
    return !first;
  };

  const nextStep = (e: FormEvent) => {
    e.preventDefault();
    if (validate(["name", "phone", "email"])) { setStep(2); setErrors({}); window.scrollTo(0, 0); }
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate(["service", "address", "date", "time"])) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 900);
  };
  const message = encodeURIComponent(`Hi Sparkles, I'd like to request a cleaning quotation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nAddress: ${form.address}\nProperty: ${form.propertyType || "Not specified"}\nRooms: ${form.bedrooms || "Not specified"}\nBathrooms: ${form.bathrooms || "Not specified"}\nFrequency: ${form.frequency || "Not specified"}\nSpace details: ${form.spaceDetails || "None"}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\nAdditional notes: ${form.notes || "None"}`);
  const openWhatsApp = () => window.open(`https://wa.me/441234567890?text=${message}`, "_blank", "noopener,noreferrer");
  const addCalendar = () => {
    const start = `${form.date.replaceAll("-", "")}T${form.time.replace(":", "")}00`;
    const [hour, minute] = form.time.split(":").map(Number);
    const endDate = new Date(`${form.date}T${String(hour + 2).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`);
    const end = `${endDate.getFullYear()}${String(endDate.getMonth() + 1).padStart(2, "0")}${String(endDate.getDate()).padStart(2, "0")}T${String(endDate.getHours()).padStart(2, "0")}${String(endDate.getMinutes()).padStart(2, "0")}00`;
    const content = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:Sparkles Cleaning — ${form.service}\nLOCATION:${form.address}\nDESCRIPTION:Quotation request for ${form.name}. Preferred time — subject to confirmation.\nEND:VEVENT\nEND:VCALENDAR`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type: "text/calendar" }));
    link.download = "sparkles-cleaning-request.ics";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return <main className="quote-page">
    <aside className="quote-aside">
      <Logo light />
      <div><Eyebrow>You're in good hands</Eyebrow><h1>Let's get your<br />space <em>sparkling.</em></h1><p>Tell us a little about what you need. We'll review your request and provide a free, no-obligation quotation.</p><ul><li><Icon name="check" /> Free, no-obligation quotation</li><li><Icon name="check" /> Friendly, trusted local professionals</li><li><Icon name="check" /> Your preferred time, subject to confirmation</li></ul></div>
      <img src={exteriorCleaning} alt="A professional cleaner carefully maintaining a commercial building" />
    </aside>
    <section className="quote-content">
      <div className="quote-top"><Logo /><button onClick={close} className="close-button">Close <span>×</span></button></div>
      <div className="quote-card">
        {status === "success" ? <div className="success-state"><span className="success-icon"><Icon name="check" size={30} /></span><Eyebrow>Quotation prepared</Eyebrow><h2>Your quotation request is ready!</h2><p>We've prepared your cleaning quotation request. Continue to WhatsApp to send your details to Sparkles.</p><div className="summary"><div><span>Service</span><b>{form.service}</b></div><div><span>Preferred date</span><b>{form.date}</b></div><div><span>Preferred time</span><b>{form.time}</b></div></div><Button onClick={openWhatsApp}>Continue to WhatsApp <Icon name="arrow" /></Button><Button secondary onClick={addCalendar}><Icon name="calendar" /> Add to Calendar</Button><small>Your preferred date and time are not confirmed until our team contacts you.</small></div> :
          <>
            <div className="progress"><div className={step >= 1 ? "active" : ""}><b>01</b><span>Your details</span></div><i /><div className={step >= 2 ? "active" : ""}><b>02</b><span>Cleaning details</span></div></div>
            {step === 1 ? <form onSubmit={nextStep} noValidate><div className="form-heading"><span>Step 1 of 2</span><h2>First, tell us about you.</h2><p>We'll use these details to get in touch about your quotation.</p></div><Field id="name" label="Full name" value={form.name} onChange={(v) => update("name", v)} error={errors.name} placeholder="e.g. Sarah Morgan" /><Field id="phone" label="Phone number" value={form.phone} onChange={(v) => update("phone", v)} error={errors.phone} placeholder="+44 7700 900000" type="tel" /><Field id="email" label="Email address" value={form.email} onChange={(v) => update("email", v)} error={errors.email} placeholder="you@example.com" type="email" /><Button type="submit">Continue <Icon name="arrow" /></Button></form> :
              <form onSubmit={submit} noValidate><div className="form-heading"><button type="button" onClick={() => setStep(1)}>← Back</button><span>Step 2 of 2</span><h2>Tell us about your space.</h2><p>A few practical details help us prepare an accurate quotation.</p></div><label className={errors.service ? "field error" : "field"}><span>Cleaning service *</span><select id="service" value={form.service} onChange={(e) => update("service", e.target.value)}><option value="">Select a service</option>{services.map(([s]) => <option key={s}>{s}</option>)}</select>{errors.service && <small>Please select a cleaning service.</small>}</label><Field id="address" label="Service address" value={form.address} onChange={(v) => update("address", v)} error={errors.address} placeholder="House number, street and postcode" /><div className="field-row"><SelectField label="Property type" value={form.propertyType} onChange={(v) => update("propertyType", v)} options={["House","Flat / apartment","Office / workplace","Other"]} /><SelectField label="Frequency" value={form.frequency} onChange={(v) => update("frequency", v)} options={["One-off clean","Weekly","Fortnightly","Monthly","Not sure yet"]} /></div><div className="field-row"><SelectField label="Bedrooms / rooms" value={form.bedrooms} onChange={(v) => update("bedrooms", v)} options={["Studio / open plan","1","2","3","4","5+"]} /><SelectField label="Bathrooms" value={form.bathrooms} onChange={(v) => update("bathrooms", v)} options={["1","2","3","4+"]} /></div><label className="field"><span>Tell us about the space <i>Optional</i></span><textarea id="spaceDetails" value={form.spaceDetails} onChange={(e) => update("spaceDetails", e.target.value)} placeholder="Approximate size, current condition, priority rooms or anything that needs special attention..." rows={4} /></label><div className="field-row"><Field id="date" label="Preferred date" value={form.date} onChange={(v) => update("date", v)} error={errors.date} type="date" /><Field id="time" label="Preferred time" value={form.time} onChange={(v) => update("time", v)} error={errors.time} type="time" /></div><label className="field"><span>Additional notes <i>Optional</i></span><textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Access instructions, pets, product preferences or anything else..." rows={3} /></label>{Object.keys(errors).length > 0 && <p className="form-error">Please complete the required fields.</p>}<Button type="submit" disabled={status === "loading"}>{status === "loading" ? <><span className="spinner" /> Sending...</> : <>Send My Request <Icon name="arrow" /></>}</Button></form>}
          </>}
      </div>
    </section>
  </main>;
}

function Field({ id, label, value, onChange, error, placeholder = "", type = "text" }: { id: string; label: string; value: string; onChange: (v: string) => void; error?: boolean; placeholder?: string; type?: string }) {
  return <label className={error ? "field error" : "field"}><span>{label} *</span><input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} min={type === "date" ? new Date().toISOString().split("T")[0] : undefined} />{error && <small>Please enter a valid {label.toLowerCase()}.</small>}</label>;
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return <label className="field"><span>{label} <i>Optional</i></span><select value={value} onChange={(e) => onChange(e.target.value)}><option value="">Select</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

export default function App() {
  const [quote, setQuote] = useState<string | null>(null);
  const [page, setPage] = useState<PageName>("home");
  const openQuote = (service = "") => { setQuote(service || ""); window.scrollTo(0, 0); };
  const navigate = (next: PageName) => { setPage(next); window.scrollTo(0, 0); };
  if (quote !== null) return <Quote initialService={quote} close={() => setQuote(null)} />;
  if (page !== "home") return <InfoPage page={page} navigate={navigate} openQuote={openQuote} />;
  return <Landing openQuote={openQuote} navigate={navigate} />;
}
