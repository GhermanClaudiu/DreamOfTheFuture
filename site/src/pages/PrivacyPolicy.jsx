import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-ink px-6 sm:px-10 lg:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-dark font-medium mb-10 lift-on-hover">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-12">
          Dreams of the Future
        </p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">What we collect</h2>
            <p>
              When you contact us through the form on this site, we collect the information you
              provide — your name, email, phone number, company and message. We use it solely to
              respond to your enquiry.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">How we use it</h2>
            <p>
              Your data is used only to discuss your needs and deliver our services. We do not sell
              your information and we do not use it for third-party marketing.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any
              time by writing to{' '}
              <a href="mailto:liviu.bidian@dotf.ro" className="text-primary-dark underline">
                liviu.bidian@dotf.ro
              </a>.
            </p>
          </section>
          <p className="text-sm text-muted/70 pt-6">
            This is a template privacy notice and should be reviewed by the business before launch.
          </p>
        </div>
      </div>
    </main>
  )
}
