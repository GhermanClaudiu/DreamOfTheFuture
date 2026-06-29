import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <main className="min-h-screen bg-background text-ink px-6 sm:px-10 lg:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-dark font-medium mb-10 lift-on-hover">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-12">
          Dreams of the Future
        </p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Engagements</h2>
            <p>
              All consultancy, training and coaching engagements are governed by a separate written
              agreement defining scope, deliverables, timeline and fees. Nothing on this website
              constitutes a binding offer.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Confidentiality</h2>
            <p>
              We treat all client information as strictly confidential. Discretion is a core part of
              our boutique approach.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Liability</h2>
            <p>
              Our advice is provided in good faith based on the information available. Outcomes depend
              on factors outside our control; liability is limited as set out in each engagement
              agreement.
            </p>
          </section>
          <p className="text-sm text-muted/70 pt-6">
            This is a template and should be reviewed by the business before launch.
          </p>
        </div>
      </div>
    </main>
  )
}
