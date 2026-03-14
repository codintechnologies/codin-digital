'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Sparkles,
  Target,
  Layers,
  RefreshCw,
  Infinity,
  MapPin,
  Building2,
  Users,
} from 'lucide-react'

export default function AboutPage() {
  const howWeWork = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Understand your reality',
      description:
        'We start by deeply assessing your business, workflows, and constraints to uncover the real problems—not just the symptoms.',
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Map the right technologies',
      description:
        'We analyze the technology portfolio that best fits your needs, from cloud and data to AI and custom platforms.',
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: 'Build reusable assets',
      description:
        'Instead of starting from zero every time, we create proprietary software assets, frameworks, and platforms that can be reused and adapted.',
    },
    {
      icon: <Infinity className="w-7 h-7" />,
      title: 'Enable non-linear growth',
      description:
        'Our approach lets you grow revenue without a proportional increase in headcount—reducing time and cost while enabling recurring value.',
    },
  ]

  const values = [
    { title: 'Innovation', description: 'We constantly explore, test, and adopt new technologies that unlock better ways of working.' },
    { title: 'Creativity', description: 'We design solutions that are not only functional, but thoughtful and tailored to each organization.' },
    { title: 'Teamwork', description: 'We collaborate closely with our clients and within our teams to deliver outcomes, not just software.' },
    { title: 'Professionalism', description: 'We operate with clarity, reliability, and respect in every engagement.' },
    { title: 'Commitment', description: 'We stay with our clients from idea to implementation and beyond, ensuring real adoption and impact.' },
    { title: 'Sustainability', description: 'We design for long-term value—technically, financially, and socially.' },
    { title: 'Success', description: 'We measure our success by the measurable growth and transformation our clients achieve.' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero / Introduction */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 mb-5">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-xs font-semibold tracking-wide text-red-700 uppercase">
                  About Codin Technologies Ltd.
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Making advanced technology truly usable.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                Codin Technology is committed to making advanced technologies accessible, adoptable, and implementable,
                modernizing businesses and transforming how people work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a standard consultancy firm, we work closely with organizations to understand their needs, problems,
                and challenges—then design and implement technology solutions that unlock non-linear growth.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                A product-led consulting approach
              </h2>
              <p className="text-gray-600 mb-6">
                Rather than treating every engagement as a one-off project, we build products and platforms that can be
                deployed, reused, and customized across clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-600" />
                  <p className="text-gray-700">
                    We create proprietary software assets, frameworks, and platforms that are reused across multiple
                    clients.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-600" />
                  <p className="text-gray-700">
                    This lets our clients generate non-linear growth—more revenue without a proportional increase in staff.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-600" />
                  <p className="text-gray-700">
                    By not starting from scratch each time, we reduce implementation time and cost while enabling
                    recurring value for both Codin Technologies and our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How we partner with our clients
              </h2>
              <p className="text-lg text-gray-600">
                From diagnosis to deployment, we blend consulting discipline with product thinking to deliver
                meaningful, repeatable outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-medium hover:border-red-100 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business description / Identity */}
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who we are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Codin Technologies Ltd. is a technology consultancy and product company headquartered in Dar es Salaam,
                Tanzania. We serve organizations of all sizes, helping them adopt modern platforms that transform how
                work gets done.
              </p>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">
                    Company Name & Location
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Codin Technologies Ltd.
                  </p>
                  <p className="text-gray-600">
                    Headquarters: Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Making advanced technology accessible, adoptable, and implementable for organizations of all sizes.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We aim to be the technology partner of choice across Africa and beyond, creating new ways of working
                  and realizing value within our communities.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Rooted in Tanzania, partnering with organizations across Africa and globally.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Our Values
                </h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  These principles guide how we work with our clients, with each other, and with the communities we
                  serve.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-sm">
                  Built by a team committed to long-term, sustainable success.
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-medium transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-black">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to modernize how your organization works?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Partner with Codin Technologies Ltd. to design and implement technology that is truly accessible,
              adoptable, and implementable—so your teams can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-red-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Talk to our team
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 rounded-lg border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
