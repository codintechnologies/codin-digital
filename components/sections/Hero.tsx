'use client'

import React from 'react'
import { ArrowRight, Play, Shield, Zap, TrendingUp, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import Link from 'next/link'

const Hero = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Architecture',
      description: 'Scalable, multi-tenant SaaS infrastructure built for global operations.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-First Engineering',
      description: 'Predictive intelligence and automation integrated at the core.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Ecosystem Interoperability',
      description: 'Secure API frameworks and deep integration capabilities.'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-50 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 animate-fade-in-down">
              <TrendingUp className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-gray-800">Enterprise Software & AI Engineering</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Engineering Intelligent</span>
                <span className="block text-red-600">Platforms for Enterprise</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                We build, operate, and scale enterprise software across logistics, sustainability, digital marketing, supply chains, and AI-driven transformation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="xl"
                className="group bg-red-600 hover:bg-red-700 text-white"
                icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                iconPosition="right"
              >
                Explore Our Platforms
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Request Consultation
                </Button>
              </Link>
            </div>

            {/* Tertiary CTA */}
            <div className="pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a href="#work-with-us" className="inline-flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-medium">
                <span>Work With Us &ndash; Build SaaS Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-500 text-sm mb-4 font-medium uppercase tracking-wider">Powering Global Enterprises</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 text-sm font-medium">6+ Core Platforms</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-700 text-sm font-medium">15+ Industries Served</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-gray-700 text-sm font-medium">AI-Driven Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Stats */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300 card-hover group"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
                <div className="text-gray-500 text-sm">Data Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.99%</div>
                <div className="text-gray-500 text-sm">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-500 text-sm">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero