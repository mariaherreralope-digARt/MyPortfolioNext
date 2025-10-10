// src/components/legal/LegalPages.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export interface Info {
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone?: string;
  hosting?: string;
  websiteUrl?: string;
  lastUpdated?: string;
  ecommerce?: boolean;
  paymentMethods?: string[];
}

interface PageProps {
  lang?: "es" | "en";
  info?: Info;
}

const defaultInfo: Info = {
  name: "Maria Herrera / digARt",
  taxId: "30.787.144-B",
  address: "Tenor Pedro LaVirgen, 4, Cordoba, Spain",
  email: "mariaherreralope@gmail.com",
  phone: "+34 692 962 356",
  hosting: "Vercel Inc.",
  websiteUrl: "https://digitalartmariaherrera.com",
  lastUpdated: "2025-08-16",
  ecommerce: true,
  paymentMethods: ["Credit/Debit Card", "PayPal", "Bank Transfer"],
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
    <div className="prose prose-invert max-w-none text-sm md:text-base">
      {children}
    </div>
  </section>
);

const PageFrame: React.FC<{ title: string; children: React.ReactNode; info?: Info }> = ({
  title,
  children,
  info,
}) => (
  <div className="min-h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-slate-100">
    <Head>
      <title>{title}</title>
    </Head>
    <div className="mx-auto max-w-4xl px-5 py-10">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-xs text-slate-400 mt-1">
          {info?.lastUpdated ? `Last updated: ${info.lastUpdated}` : "[Last updated date]"}
        </p>
      </header>
      {children}
      <footer className="mt-12 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} {info?.name || "[Owner / Company Name]"}</p>
      </footer>
    </div>
  </div>
);

/* ------------------------- LEGAL NOTICE / AVISO LEGAL ------------------------- */
export const LegalNotice: React.FC<PageProps> = ({ lang = "es", info = defaultInfo }) => (
  <PageFrame title={lang === "es" ? "Aviso Legal" : "Legal Notice"} info={info}>
    {lang === "es" ? (
      <>
        <Section title="Identificación del titular">
          <ul className="list-disc pl-5">
            <li><strong>Titular:</strong> {info.name}</li>
            <li><strong>NIF/CIF:</strong> {info.taxId}</li>
            <li><strong>Dirección:</strong> {info.address}</li>
            <li><strong>Correo electrónico:</strong> {info.email}</li>
            {info.phone && <li><strong>Teléfono:</strong> {info.phone}</li>}
            <li><strong>Proveedor de hosting:</strong> {info.hosting}</li>
            {info.websiteUrl && <li><strong>Web:</strong> {info.websiteUrl}</li>}
          </ul>
        </Section>
        <Section title="Condiciones de uso">
          <p>El acceso y uso de este sitio web implica la aceptación de estas condiciones y de la normativa aplicable, incluida la LSSI-CE.</p>
        </Section>
        <Section title="Propiedad intelectual">
          <p>Los contenidos (textos, imágenes, logotipos, diseños y código) son propiedad del titular o de terceros autorizados. Se prohíbe su reproducción sin autorización expresa.</p>
        </Section>
        <Section title="Enlaces y responsabilidad">
          <p>No nos hacemos responsables de contenidos de terceros enlazados ni de daños derivados de interferencias, interrupciones o errores en el acceso al sitio.</p>
        </Section>
      </>
    ) : (
      <>
        <Section title="Owner Identification">
          <ul className="list-disc pl-5">
            <li><strong>Owner:</strong> {info.name}</li>
            <li><strong>Tax ID (NIF/CIF):</strong> {info.taxId}</li>
            <li><strong>Address:</strong> {info.address}</li>
            <li><strong>Email:</strong> {info.email}</li>
            {info.phone && <li><strong>Phone:</strong> {info.phone}</li>}
            <li><strong>Hosting provider:</strong> {info.hosting}</li>
            {info.websiteUrl && <li><strong>Website:</strong> {info.websiteUrl}</li>}
          </ul>
        </Section>
        <Section title="Terms of Use">
          <p>Access to and use of this website implies acceptance of these terms and applicable regulations, including Spain’s LSSI-CE.</p>
        </Section>
        <Section title="Intellectual Property">
          <p>All content (texts, images, logos, designs and code) is owned by the site owner or licensed third parties. Reproduction without express authorization is prohibited.</p>
        </Section>
        <Section title="Links & Liability">
          <p>We are not responsible for third-party content linked from this site nor for damages arising from interruptions, errors, or issues beyond our control.</p>
        </Section>
      </>
    )}
  </PageFrame>
);

/* ------------------------ PRIVACY POLICY / POLÍTICA ------------------------ */
export const PrivacyPolicy: React.FC<PageProps> = ({ lang = "es", info = defaultInfo }) => (
  <PageFrame title={lang === "es" ? "Política de Privacidad" : "Privacy Policy"} info={info}>
    {/* Privacy content here, same as your original component */}
    <p className="text-slate-300">[Privacy content here]</p>
  </PageFrame>
);

/* ----------------------- COOKIES POLICY / POLÍTICA COOKIES ----------------------- */
export const CookiesPolicy: React.FC<PageProps> = ({ lang = "es", info = defaultInfo }) => (
  <PageFrame title={lang === "es" ? "Política de Cookies" : "Cookies Policy"} info={info}>
    {/* Cookies content here */}
    <p className="text-slate-300">[Cookies content here]</p>
  </PageFrame>
);

/* --------------------- TERMS OF USE / CONDICIONES DE USO --------------------- */
export const TermsOfUse: React.FC<PageProps> = ({ lang = "es", info = defaultInfo }) => (
  <PageFrame title={lang === "es" ? "Condiciones de Uso" : "Terms of Use"} info={info}>
    {/* Terms of Use content here */}
    <p className="text-slate-300">[Terms content here]</p>
  </PageFrame>
);

/* --------------- TERMS OF SALE / CONDICIONES DE CONTRATACIÓN --------------- */
export const TermsOfSale: React.FC<PageProps> = ({ lang = "es", info = defaultInfo }) => (
  <PageFrame title={lang === "es" ? "Condiciones de Contratación" : "Terms of Sale"} info={info}>
    {/* Terms of Sale content here */}
    <p className="text-slate-300">[Sales content here]</p>
  </PageFrame>
);

/* ---------------------------- DEMO / PREVIEW TABS ---------------------------- */
const Tab: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({
  active,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${
      active
        ? "bg-emerald-500 text-white border-emerald-500"
        : "border-slate-600 text-slate-200 hover:bg-slate-800"
    }`}
  >
    {children}
  </button>
);

export const LegalPagesDemo: React.FC = () => {
  const router = useRouter();
  const [lang, setLang] = useState<"es" | "en">("es");
  const [tab, setTab] = useState("legal");

  useEffect(() => {
    if (router.query.lang === "en" || router.query.lang === "es") setLang(router.query.lang as "es" | "en");
    if (router.query.tab) setTab(router.query.tab as string);
  }, [router.query]);

  const info = defaultInfo;

  return (
    <div className="min-h-screen bg-[#0c0c1d] py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            <Tab active={tab === "legal"} onClick={() => setTab("legal")}>Aviso Legal</Tab>
            <Tab active={tab === "privacy"} onClick={() => setTab("privacy")}>Privacidad</Tab>
            <Tab active={tab === "cookies"} onClick={() => setTab("cookies")}>Cookies</Tab>
            <Tab active={tab === "terms"} onClick={() => setTab("terms")}>Uso</Tab>
            <Tab active={tab === "sale"} onClick={() => setTab("sale")}>Venta</Tab>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-xs">Idioma:</span>
            <Tab active={lang === "es"} onClick={() => setLang("es")}>ES</Tab>
            <Tab active={lang === "en"} onClick={() => setLang("en")}>EN</Tab>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-700">
          {tab === "legal" && <LegalNotice lang={lang} info={info} />}
          {tab === "privacy" && <PrivacyPolicy lang={lang} info={info} />}
          {tab === "cookies" && <CookiesPolicy lang={lang} info={info} />}
          {tab === "terms" && <TermsOfUse lang={lang} info={info} />}
          {tab === "sale" && <TermsOfSale lang={lang} info={info} />}
        </div>
      </div>
    </div>
  );
};
