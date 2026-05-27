// src/App.jsx
import React, { useEffect, useState } from "react";

/* ─── Nav ─────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white border-b border-zinc-200" : "bg-transparent"}`}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 flex items-center justify-between h-16">
        <span className="font-sans font-black text-zinc-900 text-base">Priya's Academy</span>
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Courses", id: "#courses" },
            { name: "Methodology", id: "#methodology" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQs", id: "#faqs" },
          ].map((l) => (
            <a key={l.name} href={l.id} className="text-[10px] uppercase tracking-widest font-medium text-zinc-500 hover:text-zinc-900 transition-colors">{l.name}</a>
          ))}
        </div>
        <a href="#demo" className="bg-zinc-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors inline-block">Book Demo</a>
      </div>
    </nav>
  );
}

/* ─── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-10">
            <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-400">Admission Open · 2024–25</p>
            <h1 className="font-serif font-black text-zinc-900 leading-none" style={{ fontSize: "clamp(48px, 8vw, 96px)" }}>
              Your 95+<br /><em className="italic">in CBSE Maths</em><br />Starts Here.
            </h1>
            <p className="text-base text-zinc-500 max-w-prose leading-relaxed">
              Personalized online coaching for CBSE Class 10 &amp; 12. Bridge your learning gaps with our data-driven methodology and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-zinc-900 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors">Explore Courses</button>
              <button className="border border-zinc-900 text-zinc-900 px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors">Watch a Class</button>
            </div>
          </div>
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3yn-9KpZkpNfUpcjsvmue_VSpKALMDZQcsL8akORjDPrxlkLBCbe2RCXhUjW7Sz0u8G-ccaxMWBBlBFtaNHpilwMEt7WukribOwZvEQIJfmQedy0-PP7CkmhyLG7ZeQU19exx7hbkH1nVrc-ZoDEPJ4tdls7CpFGXmQTzfIJJ3RDBW9Yd2i3n-Km4xCHKJA0qUVZA9vcRSq8eX5wDdEFxFWJxBlGSWKpRSmrQrmKDRYIrSChiiLynQyPyv5kb9ub40w6Q0qr4Jc8O"
                alt="Abstract math visual"
                className="w-full h-full object-cover grayscale"
              />
              {/* 3D Floating Math Formulas */}
              <div className="absolute top-10 left-[-40px] math-float-1">
                <div className="math-card dark shadow-2xl">∑(x+y)² = n</div>
              </div>
              <div className="absolute bottom-16 right-[-50px] math-float-2">
                <div className="math-card shadow-2xl">∫ f(x)dx</div>
              </div>
              <div className="absolute top-[-10px] right-10 math-float-3" style={{ animationDelay: '-3s' }}>
                <div className="math-card shadow-2xl">lim(x→∞)</div>
              </div>
              <div className="absolute bottom-[-10px] left-10 math-float-1" style={{ animationDelay: '-7s' }}>
                <div className="math-card dark shadow-2xl">e^(iπ) + 1 = 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Methodology ───────────────────────────────────────── */
function Methodology() {
  const steps = [
    { n: "1", title: "LEARN",  desc: "Concept video lectures and live interactive sessions." },
    { n: "2", title: "PRACTICE", desc: "Graded assignment sheets from NCERT to Exemplar." },
    { n: "3", title: "TEST", desc: "Bi-weekly subjective and objective mock tests." },
    { n: "4", title: "ANALYZE", desc: "AI-generated error analysis report for each test." },
    { n: "5", title: "IMPROVE", desc: "Remedial sessions to bridge identified knowledge gaps." },
  ];
  return (
    <section id="methodology" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 text-center">
        <h2 className="font-serif font-bold text-zinc-900 mb-20 text-2xl">
          The 5-Step Pedagogy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-10 right-10 h-[1px] bg-zinc-100 z-0"></div>
          
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex flex-col items-center z-10">
              <div className="w-14 h-14 bg-zinc-900 text-white flex items-center justify-center font-serif font-bold text-lg mb-8">
                {n}
              </div>
              <h3 className="font-sans font-medium text-zinc-600 text-sm tracking-[0.1em] mb-4">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[180px] mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Core Curriculum ───────────────────────────────────── */
function CoreCurriculum() {
  const modules = [
    {
      title: "Real Numbers & Polynomials",
      desc: "The architecture of motion and change. Deep dive into multivariate systems.",
      img: "/course_real_numbers.png",
      weeks: "10 Weeks",
      level: "Mastery",
    },
    {
      title: "Trigonometry & Applications",
      desc: "Understanding the fabric of reality through probability and wave functions.",
      img: "/course_trigonometry.png",
      weeks: "12 Weeks",
      level: "Mastery",
    },
    {
      title: "Surface Areas & Volumes",
      desc: "Crafting logic structures that power the next generation of digital intelligence.",
      img: "/course_surface_areas.png",
      weeks: "8 Weeks",
      level: "Foundation",
    },
  ];
  return (
    <section id="courses" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="flex items-start justify-between mb-3">
          <h2 className="font-sans font-black text-zinc-900 text-3xl">Core Curriculum</h2>
          <a href="#" className="hidden md:block text-[10px] font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-900 pb-0.5 hover:opacity-50 transition-opacity mt-1.5">
            View Full Catalog
          </a>
        </div>
        <p className="text-sm text-zinc-500 mb-12 max-w-sm leading-relaxed">Selected modules designed for the modern intellectual. Sharp focus, zero fluff.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map(({ title, desc, img, weeks, level }) => (
            <div key={title} className="group cursor-pointer">
              <div className="overflow-hidden mb-5" style={{ height: "220px" }}>
                <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-sans font-black text-zinc-900 text-lg leading-snug mb-2">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-zinc-100 text-zinc-600">{weeks}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-zinc-300 text-zinc-600">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Courses ──────────────────────────────────────────── */
function Courses() {
  const courses = [
    {
      tag: "Standard Syllabus",
      title: "CBSE Class 10 Maths",
      items: ["Complete NCERT + RS Aggarwal", "10 Years Sample Papers", "Daily Homework Support"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Q04A_bfAUSbvxfl9bFACaiRfES1KKY9jk-i-TKdOTUfkrzaVN2Qdt56fbuMTbt3LEhsfLk9bcq-qUG3KTNTtUsHOWz8NIf9Bi21AkEWNfXL83o2bU0hffvlXCdGXp1w3QT71qKe1V2NsmxFYn2kmEdIUT6ehOkcdPedKcK2xRnr0NIzp-dXGrGXbRtCRDZ8p6Pd4eELjoZTPKnPHZokFkd1gIFu2xe2GPL4h600LKlJ5g8fkk_nNnl4yPOSAkf-pLNVogeqslDWQ",
      duration: "12 Months",
    },
    {
      tag: "Advanced Concepts",
      title: "CBSE Class 12 Maths",
      items: ["Calculus & Algebra Specialization", "JEE Foundation Module", "Mock Exam Series"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPUqNQc2I0OiD69n3JEfRB7pI0Fyneghx4iXKPmh4Lhu-KfBiQmU0Tr-zZaTdoWIggHYpPPAqLLk1Fl6SfZWeEwdT96qm263K3q7XfazLHIIHXvK7Tz5AY2gCHtY35wic_buU0_XLvGHdq_p3lW2PG2PMffyp_U_8HoPjouA-iEbgmBSSXLMMuD2M_HkUUDxO_ImtMqkz84UVeUBh-Cax9zPpBwVUIZN3BPGxUn7pMqb8y89kGgZ95t9leYzYv3JABzQBz0UUtxBo",
      duration: "12 Months",
    },
    {
      tag: "Crash Course",
      title: "Board Exam Bootcamp",
      items: ["10-week intensive revision", "Previous 5-year papers solved", "Doubt sessions 6 days/week"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcRMcYl-Wk6wVZ-q-SW9GzKhXajskt7TY_L6tJ2bOllu0Hco7lvkufSoZcaGMt1F-wljFZG_0O2eBZNenpGunYwJikWdAZ4w7GmoWQ13eZAvvPFfYIad68OYGcCswEbyE-m4VDoG-ZPBRVMJt12LTsFB41Uum7VT7pWmOGAz7hlGeYHLjU5zYJXm9ekq3DfBBX8pyBTKin3rLE2S1LUw2Y_sZaRGTex3Rkad41JagxI2NucOtWd2IQwqx3W0l3Yh2hq-ioetWzmbHU",
      duration: "10 Weeks",
    },
  ];
  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-400 mb-3">Enroll Now</p>
            <h2 className="font-serif font-black text-zinc-900" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Tailored Math <em>Programs</em>
            </h2>
          </div>
          <a href="#" className="hidden md:block text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">View Full Syllabus →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(({ tag, title, items, img, duration }) => (
            <div key={title} className="group bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer">
              <div className="overflow-hidden" style={{ height: "260px" }}>
                <img src={img} alt={title} className="w-full h-full object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-400 mb-2">{tag}</p>
                <h3 className="font-serif font-bold text-zinc-900 text-lg mb-4 leading-snug">{title}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-500 leading-relaxed">
                      <span className="material-symbols-outlined text-zinc-900 flex-shrink-0" style={{ fontSize: "15px", marginTop: "2px" }}>check</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-zinc-200 pt-5 mt-auto">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Duration</div>
                    <div className="font-semibold text-sm text-zinc-900">{duration}</div>
                  </div>
                  <button className="border border-zinc-900 text-zinc-900 text-xs font-bold uppercase tracking-wider px-5 py-2 hover:bg-zinc-900 hover:text-white transition-colors">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────── */
function Testimonials() {
  const list = [
    {
      quote: "The way Priya Ma'am explains Calculus is magic. My son used to hate math, but now he's solving complex problems with ease. The personal attention is unmatched.",
      name: "Mrs. Sunita Verma", role: "Parent of Aryan, Class 12", initials: "SV",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGkRtlUy75Sq063aTGU9hxMdP-PTyQ6mI4xY1Q-jnurdDeSMVmoBIqKhu5_Y6F61HvMMdQzZkLIsAN48gfE3os5fUjqrZ_GftTCOi8r1LMYeOrjWr-I1YHttSIgAl5NZbtVlBJHV_e6qLCdKa7EkjpmQKVgbG3pUPW_CGvXOmWUXstjRdA7LX0KW9YQpJ2FSPocSTx0ua8Vep9VD3XiTyg-njCuggATzWo4hLtEtSmBce60Ql037-18WSZeIwi-v9td8SL9BU-TXvf",
    },
    {
      quote: "I love the interactive tests. The detailed analysis reports help me identify exactly where I'm going wrong. Highly recommended for any CBSE student!",
      name: "Rahul Khanna", role: "Student, Class 10", initials: "RK", img: null,
    },
    {
      quote: "The recorded sessions are a lifesaver for revision. I could watch the Trigonometry lecture three times until I got it perfect. Thank you for the support!",
      name: "Ananya Singh", role: "Student, Class 12", initials: "AS",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPOuCacVc3zPCux447Eu881GOZCDf0_L8aMWuesbH5cuPinK1yQe1OJDvcZVo0B8K8zKwMCa2yIKRge7vfhnc6Et8XPtpyyMMso23cDewl9_ufHT_MMVULyLv1oJLmxqDpa0-PemRKHz9Y-v8c1sQt_cVIXI3VH_cB-FoPPUQH4IhWoyMoL7niYhoVmjXvOGIIxT3uECceESrQDPbamem_X-X1-ys_egxo7q7YjuulaoB4fkSp1y-aAegTDOaqmf0WsTr8l1rraU30",
    },
  ];
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-400 mb-4">Voices of Distinction</p>
            <h2 className="font-serif font-black text-zinc-900 mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              What Students<br /><em>Say</em>
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">Real transformations from students who chose to invest in their future.</p>
          </div>
          <div className="md:col-span-8">
            {list.map(({ quote, name, role, initials, img }, i) => (
              <div key={name} className={`py-8 flex gap-6 items-start ${i > 0 ? "border-t border-zinc-200" : ""}`}>
                <div className="flex-shrink-0">
                  {img
                    ? <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover grayscale" />
                    : <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold text-sm">{initials}</div>
                  }
                </div>
                <div>
                  <p className="text-base text-zinc-900 font-serif italic leading-relaxed mb-3">"{quote}"</p>
                  <div className="font-semibold text-sm text-zinc-900">{name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Demo / Contact ───────────────────────────────────── */
function Demo() {
  return (
    <section id="demo" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="mb-10">
          <h2 className="font-sans font-black text-zinc-900 text-3xl md:text-4xl mb-2">Secure Your Legacy.</h2>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
            Schedule a private consultation and tour of our digital ecosystem. Admission is selective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Full Name</label>
                <input className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 outline-none bg-white transition-colors" placeholder="John Doe" type="text" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Email Address</label>
                <input className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 outline-none bg-white transition-colors" placeholder="john@email.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Interest</label>
              <select className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 focus:border-zinc-900 outline-none bg-white transition-colors">
                <option>Algebra &amp; Number Systems</option>
                <option>Trigonometry &amp; Applications</option>
                <option>Surface Areas &amp; Volumes</option>
                <option>Calculus &amp; Differentiation</option>
                <option>CBSE Class 10 Full Course</option>
                <option>CBSE Class 12 Full Course</option>
                <option>Board Exam Bootcamp</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Phone</label>
                <input className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 outline-none bg-white transition-colors" placeholder="+91 XXXXX XXXXX" type="tel" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Preferred Time</label>
                <input className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 focus:border-zinc-900 outline-none bg-white transition-colors" type="time" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-1.5">Message (Optional)</label>
              <textarea rows={4} className="w-full border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 outline-none bg-white transition-colors resize-none" placeholder="How can we help shape your future?" />
            </div>
            <button type="submit" className="w-full bg-zinc-900 text-white py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-700 transition-colors">
              Submit Application
            </button>
          </form>

          {/* Info panel */}
          <div className="space-y-8 pt-2">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-zinc-900 mt-0.5" style={{ fontSize: "20px" }}>location_on</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-1">Next Available Batch</p>
                <p className="text-sm text-zinc-600">Starts Monday, 5th August</p>
                <p className="text-sm text-zinc-400">Operating online, all time zones</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-zinc-900 mt-0.5" style={{ fontSize: "20px" }}>mail</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-1">Inquiries</p>
                <p className="text-sm text-zinc-600">admissions@priyasacademy.edu</p>
                <p className="text-sm text-zinc-400">45-Minute Orientation Session</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-zinc-900 mt-0.5" style={{ fontSize: "20px" }}>chat</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-1">WhatsApp</p>
                <a href="https://wa.me/91XXXXXXXXXX" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Chat with us directly →</a>
              </div>
            </div>
            <div className="border-l-2 border-zinc-900 pl-5 mt-8">
              <p className="font-serif italic text-sm text-zinc-500 leading-relaxed">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ──────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "Are the classes live or recorded?", a: "Our primary classes are live and interactive, allowing real-time doubt solving. All sessions are also recorded and available on the student portal for revision." },
    { q: "What is the batch size?", a: "To maintain quality and ensure personal attention, we limit each batch to 20 students only." },
    { q: "Do you provide study material?", a: "Yes — comprehensive PDF notes, chapter-wise assignments, and curated sample papers for board preparation are all included." },
    { q: "How do parent reports work?", a: "Parents receive a weekly email summary with attendance records, test scores, and teacher notes. A live dashboard is also available 24/7." },
  ];
  return (
    <section id="faqs" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-400 mb-4">Common Queries</p>
            <h2 className="font-serif font-black text-zinc-900" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Got<br /><em>Questions?</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-t border-zinc-200">
                <button
                  className="w-full py-5 flex items-center justify-between text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-sans font-bold text-zinc-900 text-base">{q}</span>
                  <span className={`material-symbols-outlined text-zinc-400 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>add</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="text-sm text-zinc-500 leading-relaxed pb-5 pr-10">{a}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-16">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-sans font-black text-white text-xl mb-4">Priya's Academy</div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">Empowering the next generation of engineers and scientists through mathematical excellence.</p>
            <div className="flex gap-3 mt-6">
              {["public", "person", "forum"].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 border border-zinc-700 flex items-center justify-center hover:border-zinc-400 transition-colors">
                  <span className="material-symbols-outlined text-zinc-400 hover:text-white transition-colors" style={{ fontSize: "16px" }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-5">Links</p>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Contact Us", "Student Portal"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-5">Location</p>
            <div className="w-full h-32 overflow-hidden">
              <iframe title="Location" allowFullScreen loading="lazy"
                className="w-full h-full grayscale opacity-40 contrast-125"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112115.82437255476!2d77.102492!3d28.583344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71532adceb!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1715874235431!5m2!1sen!2sus"
              />
            </div>
            <p className="text-xs text-zinc-500 mt-2">New Delhi, India</p>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">© 2024 Priya's Academy. All rights reserved.</p>
          <p className="text-xs text-zinc-600">CBSE Class 10 &amp; 12 · Mathematics Excellence</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ──────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <Methodology />
      <CoreCurriculum />
      <Courses />
      <Testimonials />
      <Demo />
      <FAQ />
      <Footer />
    </div>
  );
}
