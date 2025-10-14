'use client';

import { motion } from "framer-motion";


const pricingPlans = [
  {
    title: "Pago Único, Sin Ediciones por el Cliente",
    clientType:
      "Este plan es para clientes que no necesitan hacer cambios por sí mismos. Me envías las actualizaciones por WhatsApp o correo y yo me encargo de todo.",
    price: "300 - 600",
    currency: "EUR",
    frequency: "Pago Único",
    // deliveryTime: "1 semana",
    description:
      "Este plan es para clientes que no necesitan hacer cambios por sí mismos. Me envías las actualizaciones por WhatsApp o correo y yo me encargo de todo.",
    features: [
      "Sitio web de 1 página diseñado a medida",
      "Adaptable a móviles",
      "Animaciones básicas (Framer Motion)",
      "Carga rápida y fundamentos de SEO",
      "Configuración de hosting (Netlify/Vercel)",
      "30–50 EUR por futuras pequeñas actualizaciones bajo petición.",
    ],
    // cta: "Start your trial",
    mostPopular: "Nivel 1",
  },
  {
    title: "El Cliente Puede Editar Contenido",
    // clientType: "Ideal for: Clients who want to update text/images themselves.",
    price: "600 - 1000",
    currency: "EUR",
    frequency: "Pago Único",
    // deliveryTime: "10 days",
    description:
      "Recibirás un acceso privado a un panel fácil de usar donde podrás cambiar los textos, añadir fotos o publicar nuevas entradas en el blog, sin necesidad de código.",
    features: [
      "Todo lo del Nivel 1",
      "Panel de administración (Strapi o Sanity)",
      "Capacitación y documentación de CMS",
      "Blog o páginas dinámicas",
      "Hosting del CMS + sitio",
      "Opcional: 10–20 EUR/mes para soporte y actualizaciones.",
    ],
    // cta: "Start your trial",
    mostPopular: "Nivel 2",
  },
  {
    title: "Soporte Completo + Mantenimiento",
    clientType:
      "Este es el plan VIP. Tú te enfocas en tu negocio, yo manejo la parte técnica. Obtienes ediciones, respaldos y soporte completo — sin preocupaciones.",
    price: "1000+",
    currency: "EUR",
    frequency: "Pago Único",
    // deliveryTime: "10 days",
    description:
      "Este es el plan VIP. Tú te enfocas en tu negocio, yo manejo la parte técnica. Obtienes ediciones, respaldos y soporte completo — sin preocupaciones.",
    features: [
      "Todo lo del Nivel 2",
      "Actualizaciones mensuales (2–3 pequeños cambios)",
      "Configuración de analíticas/informes",
      "Soporte prioritario",
      "Gestión de hosting y respaldos",
      "Luego: paquete de mantenimiento 30–50 EUR/mes",
    ],
    // cta: "Start your trial",
    mostPopular: "Nivel 3",
  },
];

const PricingCards = () => {
  return (
    <div
      id="services"
      className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tl from-[#0c0c1d] to-[#111132]"
    >
      <h2 className="text-md font-extrabold text-slate-100 sm:text-xl sm:leading-tight sm:tracking-tight text-center">
        Elige el plan que se adapta a tus necesidades
      </h2>
      <p className="mt-2 text-center text-sm pt-2 md:pt-0 px-12 text-slate-300">
        Ya sea que necesites un sitio simple de una página o una presencia en línea completamente gestionada,
        elige el plan que se ajuste a tus objetivos y presupuesto. Sin tarifas ocultas,
        sin estrés técnico.
      </p>

      {/* Cards */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-8 py-5 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="relative rounded-2xl border border-emerald-400 bg-gradient-to-b from-slate-100/40 via-transparent to-slate-100/40 p-8 text-emerald-400 shadow-lg"
          >
            <h3 className="text-md font-semibold leading-5">{plan.title}</h3>

            <p
              key={plan.mostPopular}
              className="absolute top-0 -translate-y-1/2 rounded-full bg-yellow-300 px-3 py-0.5 text-sm font-semibold tracking-wide text-slate-500 shadow-md"
            >
              {plan.mostPopular}
            </p>

            <p className="mt-4 text-sm leading-4 text-slate-300">{plan.description}</p>

            <div className="mt-4 rounded-lg bg-slate-50/40 p-3">
              <p className="flex items-center text-xs font-semibold text-emerald-400">
                <span>{plan.currency}</span>
                <span className="ml-3 md:text-lg text-sm text-slate-300">{plan.price}</span>
                <span className="ml-1.5">/ {plan.frequency}</span>
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-1">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm leading-6 text-slate-200">
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
