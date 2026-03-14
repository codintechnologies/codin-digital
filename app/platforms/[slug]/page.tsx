import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CTA from '@/components/sections/CTA'
import { ArrowRight, CheckCircle2, Server, Shield, Zap, Database, Workflow, Cloud } from 'lucide-react'

// Define static params for the 6 platforms
export function generateStaticParams() {
  return [
    { slug: 'fleet-mobility' },
    { slug: 'digital-marketing' },
    { slug: 'supply-chain' },
    { slug: 'sustainability' },
    { slug: 'integrated-logistics' },
    { slug: 'ai-ml' },
  ]
}

type Platform = {
  title: string
  badge: string
  description: string
  heroImage: string
  modules: string[]
}

const platformData: Record<string, Platform> = {
  'fleet-mobility': {
    title: 'Fleet & Mobility Platform',
    badge: 'Logistics Core',
    description: 'Enterprise-grade telematics, route optimization, and autonomous asset tracking.',
    heroImage: 'bg-primary-900',
    modules: ['Telematics API', 'Route Intelligence', 'Driver Safety Score', 'Fuel Analytics']
  },
  'digital-marketing': {
    title: 'Digital Marketing Intelligence',
    badge: 'Marketing Cloud',
    description: 'Omnichannel campaign automation and predictive customer analytics.',
    heroImage: 'bg-blue-900',
    modules: ['Customer Data Platform', 'Programmatic Buying', 'SEO Automation', 'Social Listening']
  },
  'supply-chain': {
    title: 'Supply Chain Management',
    badge: 'Operations Hub',
    description: 'End-to-end visibility, procurement automation, and inventory forecasting.',
    heroImage: 'bg-indigo-900',
    modules: ['Vendor Portal', 'Inventory ML Prediction', 'Order Orchestration', 'Warehouse API']
  },
  'sustainability': {
    title: 'Sustainability Management',
    badge: 'ESG Suite',
    description: 'Carbon accounting, regulatory reporting, and energy transition planning.',
    heroImage: 'bg-green-900',
    modules: ['Carbon Calculator', 'ESG Dashboards', 'Compliance Reports', 'Energy Mapping']
  },
  'integrated-logistics': {
    title: 'Integrated Logistics System',
    badge: 'Global Freight',
    description: 'Cross-border freight management, customs clearance routing, and 3PL orchestration.',
    heroImage: 'bg-slate-900',
    modules: ['Freight Marketplace', 'Customs API', 'Port Intelligence', 'Last-Mile Routing']
  },
  'ai-ml': {
    title: 'AI & ML Transformation Suite',
    badge: 'Engineering Core',
    description: 'Bespoke machine learning models, MLOps infrastructure, and Generative AI agents.',
    heroImage: 'bg-purple-900',
    modules: ['Computer Vision API', 'NLP Pipelines', 'Predictive Maintenance', 'GenAI Copilots']
  }
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = platformData[slug]

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Platform Not Found</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={`pt-32 pb-20 text-white ${data.heroImage} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
                {data.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center">
                  Request Sandbox Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-md">
                  View API Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise Architecture</h2>
              <p className="text-lg text-gray-600">
                Built on a multi-tenant, cloud-native foundation using microservices to ensure maximum fault tolerance and scalability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <Cloud className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Cloud-Native</h3>
                <p className="text-gray-600 text-sm">Deployed globally across multi-region infrastructure with auto-scaling capabilities.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <Workflow className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">API-First Design</h3>
                <p className="text-gray-600 text-sm">RESTful and GraphQL interfaces built for seamless third-party ERP integration.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
                <p className="text-gray-600 text-sm">End-to-end encryption, SOC2 Type II compliance, and granular RBAC.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules Grid */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Modules</h2>
                <p className="text-lg text-gray-600">
                  A comprehensive suite of functional modules designed to operate independently or as a unified platform.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {data.modules.map((mod: string, i: number) => (
                <div key={i} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{mod}</h4>
                    <p className="text-gray-600">Enterprise capability designed for scale and high performance, easily integrated into existing workflows.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack / Specs */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Server className="w-8 h-8 text-gray-400" />
                <h4 className="font-bold">Infrastructure</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>AWS / Azure Multi-Cloud</li>
                  <li>Kubernetes Orchestration</li>
                  <li>Edge Computing Nodes</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Database className="w-8 h-8 text-gray-400" />
                <h4 className="font-bold">Data Layer</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>PostgreSQL Distributed</li>
                  <li>Redis Caching</li>
                  <li>Kafka Event Streaming</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Zap className="w-8 h-8 text-gray-400" />
                <h4 className="font-bold">Performance</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>{"<"} 50ms API Latency</li>
                  <li>99.99% Uptime SLA</li>
                  <li>10M+ Events/Second</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Shield className="w-8 h-8 text-gray-400" />
                <h4 className="font-bold">Compliance</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>ISO 27001 Certified</li>
                  <li>GDPR & CCPA Compliant</li>
                  <li>Automated Data Redaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
