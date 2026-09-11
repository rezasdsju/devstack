import BannerImage from '../assets/banner-stack.png'
export default function Banner() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center pl-3 sm:pl-6 pt-3'>
            <div className='space-y-3 sm:space-y-4'>
                <h1 className='text-3xl'>Build Your Ideal <br></br> <span className="bg-linear-to-r from-[#ff4b2b] via-[#e91e63] to-[#8e2de2] bg-clip-text text-transparent font-semibold">Development Stack</span></h1>
                <p>Explore frontend, backend, database, and tooling options, <br></br>
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className='flex items-center gap-3 sm:gap-5'>
                    <button onClick={()=>document.getElementById('technologies')?.scrollIntoView()} className="btn btn-active btn-secondary">Explore Technologies</button>
                    <button className="btn btn-soft">Learn More</button>
                </div>


            </div>
            <div>
                <img src={BannerImage} alt="" className='h-85 mx-auto' />
            </div>
        </div>
    )
}
