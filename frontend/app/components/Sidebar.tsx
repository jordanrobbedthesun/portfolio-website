'use client'
import Image from 'next/image'
import jordanPhoto from '../../public/images/jordan.png'
import linkedinIcon from '../../public/images/linkedin.png'
import githubIcon from '../../public/images/github.png'
import instagramIcon from '../../public/images/instagram.png'

export default function Sidebar() {
    return (
        <aside className="bg-black text-white w-full lg:w-1/4 px-4 py-6 lg:px-6 pt-28 lg:pt-32 flex flex-col items-center text-center lg:fixed lg:h-screen z-40 top-0 left-0">
        <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden bg-gray-500">
                <Image
                    src={jordanPhoto}
                    alt="Jordan Robertson"
                    fill
                    sizes="200px"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <h1 className="text-2xl mt-4 font-bold">Jordan Robertson</h1>
            <p className="mt-2 text-sm text-gray-300">First-Gen Software Engineering Student at FGCU</p>
            <div className="bg-gray-800 text-white rounded-2xl p-4 mt-6 flex justify-center gap-6 transition-colors duration-300">
                <a href="https://www.linkedin.com/in/jordantyrobertson/" target="_blank" rel="noopener noreferrer">
                    <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} loading="lazy" />
                </a>
                <a href="https://github.com/jordanrobbedthesun" target="_blank" rel="noopener noreferrer">
                    <Image src={githubIcon} alt="GitHub" width={30} height={30} loading="lazy" />
                </a>
                <a href="https://www.instagram.com/jordanrobertson.10/" target="_blank" rel="noopener noreferrer">
                    <Image src={instagramIcon} alt="Instagram" width={30} height={30} loading="lazy" />
                </a>
            </div>
        </aside>
    )
}
