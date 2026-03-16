'use client'

import React from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'Work With Us', href: '/work-with-us' },
      { name: 'Investor Relations', href: '/investor-relations' }
    ],
    products: [
      { name: 'Fleet & Mobility', href: '/platforms/fleet-mobility' },
      { name: 'Digital Marketing', href: '/platforms/digital-marketing' },
      { name: 'Supply Chain', href: '/platforms/supply-chain' },
      { name: 'Sustainability', href: '/platforms/sustainability' },
      { name: 'Integrated Logistics', href: '/platforms/integrated-logistics' },
      { name: 'AI & ML Suite', href: '/platforms/ai-ml' }
    ],
    industries: [
      { name: 'Agriculture', href: '/industries/agriculture' },
      { name: 'Tourism & Hospitality', href: '/industries/tourism' },
      { name: 'Logistics & Transport', href: '/industries/logistics' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Healthcare', href: '/industries/healthcare' }
    ],
    services: [
      { name: 'AI and Data', href: '/services/ai-data' },
      { name: 'Cloud', href: '/services/cloud' },
      { name: 'Cognitive Operations', href: '/services/cognitive' },
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Enterprise Solutions', href: '/services/enterprise' }
    ],
    resources: [
      { name: 'Insights', href: '/insights' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Whitepapers', href: '/whitepapers' }
    ]
  }
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="xl:col-span-2 text-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg pointer-events-none">
                CT
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Codin Technologies</div>
                <div className="text-sm text-gray-400">Enterprise Digital Platforms</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Engineering Intelligent Platforms for Enterprise Transformation. We build, operate, and scale enterprise software across industries globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Codin Headquarters</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+255 693 101 473</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>contact@codin.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products & Platforms</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Services (Combined column to fit grid) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/compliance" className="hover:text-white transition-colors">
                Compliance
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Copyright & Made in */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-gray-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Codin Technologies. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>Global Operations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer