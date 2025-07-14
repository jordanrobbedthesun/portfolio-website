import { FormEvent, RefObject } from 'react'

interface ContactSectionProps {
    formStatus: 'idle' | 'sending' | 'success' | 'error'
    handleContactSubmit: (e: FormEvent<HTMLFormElement>) => void
    formRef: RefObject<HTMLFormElement | null>
}

export default function ContactSection({
                                           formStatus,
                                           handleContactSubmit,
                                           formRef,
                                       }: ContactSectionProps) {
    return (
        <section id="contact" className="mt-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
                I’m currently open to internships, freelance projects, and new opportunities. Let’s talk!
            </p>

            {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded mb-4 shadow-sm">
                    ✅ Thank you for reaching out! I’ll get back to you soon.
                </div>
            )}

            {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded mb-4 shadow-sm">
                    ❌ Something went wrong. Please try again later.
                </div>
            )}

            <form
                ref={formRef}
                onSubmit={handleContactSubmit}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md max-w-xl space-y-5 transition-all duration-200"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Your message"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all duration-150"
                >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    )
}
