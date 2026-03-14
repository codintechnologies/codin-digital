import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CTA from '@/components/sections/CTA'
import { ArrowRight, Code, Database, Globe, Network, Cpu, ShieldCheck } from 'lucide-react'

export function generateStaticParams() {
  return [
    { slug: 'ai-data' },
    { slug: 'cloud' },
    { slug: 'cognitive' },
    { slug: 'consulting' },
    { slug: 'cybersecurity' },
    { slug: 'enterprise' },
  ]
}

type Service = {
  title: string
  description: string
  features: string[]
}

const serviceData: Record<string, Service> = {
  'ai-data': {
    title: 'AI and Data Engineering',
    description: 'Transform your enterprise data into predictive foresight with custom machine learning pipelines.',
    features: ['Predictive Modeling', 'GenAI Agents', 'Data Lakes', 'Pipeline Orchestration']
  },
  'cloud': {
    title: 'Cloud Architecture Systems',
    description: 'Design, migrate, and scale mission-critical applications on high-performance cloud infrastructure.',
    features: ['Multi-Cloud Strategy', 'Kubernetes Orchestration', 'Serverless APAs', 'Cost Optimization']
  },
  'cognitive': {
    title: 'Cognitive Operations API',
    description: 'Automate high-volume workflows using computer vision, NLP, and intelligent process automation.',
    features: ['Document Extraction', 'RPA Integration', 'Edge AI', 'Workflow Automation']
  },
  'consulting': {
    title: 'Enterprise Architecture Consulting',
    description: 'Replatforming strategy, vendor selection, and holistic digital transformation blueprints.',
    features: ['Technical Audits', 'Vendor Assessments', 'Digital Strategy', 'Change Management']
  },
  'cybersecurity': {
    title: 'Cybersecurity & Compliance',
    description: 'Bank-grade security frameworks, penetration testing, and zero-trust network design.',
    features: ['SOC2 Readiness', 'Pen Testing', 'Zero-Trust Networks', 'Incident Response']
  },
  'enterprise': {
    title: 'Custom Platform Engineering',
    description: 'Bespoke software development for scalable ecosystem applications and headless microservices.',
    features: ['Node.js & Go', 'Micro-frontends', 'API Gateways', 'Legacy Modernization']
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = serviceData[slug]

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Service Hero */}
        <section className="pt-32 pb-24 bg-gray-900 border-b border-gray-800 text-white">
          <div className="container-custom">
            <div className="max-w-4xl">
              <span className="inline-flex items-center space-x-2 text-primary-400 font-semibold tracking-wider uppercase text-sm mb-6">
                <Code className="w-5 h-5" />
                <span>Engineering Service</span>
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center">
                  Book a Deep-Dive Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Capabilities */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
                <p className="text-lg text-gray-600">
                  Our dedicated engineering pods implement high-impact solutions using scalable open-source and proprietary enterprise frameworks.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features.map((feature: string, i: number) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 group hover:border-primary-200 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {i % 4 === 0 ? <Database className="w-6 h-6 text-primary-500" /> : 
                     i % 4 === 1 ? <Globe className="w-6 h-6 text-indigo-500" /> :
                     i % 4 === 2 ? <Cpu className="w-6 h-6 text-green-500" /> :
                     <Network className="w-6 h-6 text-purple-500" />}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature}</h4>
                  <p className="text-sm text-gray-600">Specialized implementation teams with profound domain knowledge.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Model */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container-custom text-center">
            <ShieldCheck className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise SLA & Delivery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All engineering services come with a baseline Service Level Agreement (SLA), dedicated Technical Account Managers (TAMs), and guaranteed response times to ensure operational continuity.
            </p>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
