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
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-3">I’m currently open to internships, freelance projects, and new opportunities.</p>

            {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Thank you for reaching out! I will get back to you soon.
                </div>
            )}

            {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Sorry, something went wrong. Please try again later.
                </div>
            )}

            <form
                ref={formRef}
                onSubmit={handleContactSubmit}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow space-y-4 max-w-xl"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows={5}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {formStatus === 'sending' ? 'Sending...' : 'Send'}
                </button>
            </form>
        </section>
    )
}
