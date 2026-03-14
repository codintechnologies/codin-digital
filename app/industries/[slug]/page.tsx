import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CTA from '@/components/sections/CTA'
import { ArrowRight, Building2, TrendingUp, CheckCircle, Boxes } from 'lucide-react'

export function generateStaticParams() {
  return [
    { slug: 'agriculture' },
    { slug: 'tourism' },
    { slug: 'logistics' },
    { slug: 'education' },
    { slug: 'healthcare' },
  ]
}

type Industry = {
  title: string
  description: string
  kpis: string[]
}

const industryData: Record<string, Industry> = {
  'agriculture': {
    title: 'Agriculture & Agri-Tech',
    description: 'Transforming global food supply chains with precision logistics and traceability.',
    kpis: ['15% Yield Increase', '30% Less Spoilage', 'Real-time Cold Chain'],
  },
  'tourism': {
    title: 'Tourism & Hospitality',
    description: 'Connecting travel experiences through intelligent fleet and service platforms.',
    kpis: ['99% Guest Satisfaction', '25% Cost Reduction', 'Automated Dispatching'],
  },
  'logistics': {
    title: 'Logistics & Transport',
    description: 'Core infrastructure for freight, middle-mile, and complex global networks.',
    kpis: ['Global Visibility', 'Dynamic Rerouting', 'Fuel Optimization'],
  },
  'education': {
    title: 'Education Institutions',
    description: 'Streamlined campus operations, transit routing, and secure student management.',
    kpis: ['100% Tracking Accuracy', 'Automated Reporting', 'Lower OPEX'],
  },
  'healthcare': {
    title: 'Healthcare & Pharma',
    description: 'Mission-critical delivery tracking and compliance monitoring for medical assets.',
    kpis: ['HIPAA Compliant', 'Cold Chain Validation', 'Emergency Routing'],
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = industryData[slug]

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Industry Not Found</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-200">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center space-x-2 text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4">
                <Building2 className="w-5 h-5" />
                <span>Industry Solution</span>
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center">
                  Talk to an Industry Expert
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Transformation for {data.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Codin Technologies provides the technological foundation required to modernize legacy operations. Our platforms are customized perfectly for the regulatory, scaling, and performance needs of your sector.
                </p>
                
                <div className="space-y-6">
                  {data.kpis.map((kpi: string, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary-600" />
                      </div>
                      <span className="text-xl font-bold text-gray-900">{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-8">
                  <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Compliance Ready</h4>
                  <p className="text-sm text-gray-600">Built-in audit trails and localized data residency protocols.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Boxes className="w-8 h-8 text-indigo-500 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Systems Integration</h4>
                  <p className="text-sm text-gray-600">Connects seamlessly to your legacy ERP / CRM / WMS systems.</p>
                </div>
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
