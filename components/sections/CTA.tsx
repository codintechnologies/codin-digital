import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join leading governments and global enterprises that rely on Codin Technologies for their mission-critical platform architectures and digital operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group text-lg px-8 py-4"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              iconPosition="right"
            >
              Explore Use Cases
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                icon={<Calendar className="w-5 h-5" />}
                iconPosition="left"
              >
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Global Reach</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Enterprise SLAs</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Dedicated Engineering Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}