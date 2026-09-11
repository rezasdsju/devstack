import FooterLogo from '../assets/logo-text.png'

export default function Footer() {
    return (
        <footer>

            <div className="grid grid-cols-1 sm:grid-cols-12 mt-8 sm:mt-12 border-t border-gray-200 py-5 sm:py-10">
                <div className="sm:col-span-4 mx-3 sm:mx-7">
                    <img src={FooterLogo} alt="" className='h-10' />
                    <p>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className='flex gap-6 font-semibold mt-3'>
                        <h3>GitHub</h3>
                        <h3>Twitter</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>
                <div className="sm:col-span-8 grid grid-cols-3 pt-6 sm:pt-0 ml-3 ">
                    <div>
                        <h2 className='font-bold'>PRODUCT</h2>
                        <ul>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div >
                        <h2 className='font-bold'>Company</h2>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>Legal</h2>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-200 w-[95%] mx-auto '>
                <div className='sm:flex justify-between my-5'>
                    <div>
                        <h3>© 2026 Dev Stack. All rights reserved.</h3>
                    </div>
                    <div className='flex gap-10 justify-center'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
