import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="mt-28 px-6">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow border border-gray-300 dark:border-gray-700 text-center">
                <div className="flex justify-center space-x-10 mb-6 text-[28px] text-gray-700 dark:text-gray-300">
                    <a
                        href="https://github.com/jordanrobbedthesun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/jordantyrobertson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/jordanrobertson.10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Jordan Robertson · {new Date().getFullYear()}
                </p>
                <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                    <FaArrowUp className="text-lg" /> Back to Top
                </button>
            </div>
        </footer>
    )
}
