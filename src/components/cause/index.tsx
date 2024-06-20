import Image from 'next/image'

import img1 from '@/assets/cause1.png'
import img2 from '@/assets/cause2.png'
import img3 from '@/assets/cause3.png'

import band from '@/assets/band.png'
import SlideProvider from '@/providers/slide'
const Cause = () => {
    return (
        <div className='px-4 flex flex-col items-center gap-6 sm:gap-16'>
            <SlideProvider>
                <h1 className='max-w-[1126px] mx-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                    Nega siz Jonli master classga qatnashishingiz kerak?
                </h1>
            </SlideProvider>
            <div className='flex flex-col gap-6 sm:gap-16'>
                <SlideProvider>
                    <div className="p-6 sm:p-8 md:p-10 bg-white rounded-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-7xl mx-auto">
                        <Image src={img1} alt='img1' className='w-full max-w-[80px] sm:max-w-full sm:w-auto' />
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium text-center sm:text-left'>
                            O’zbekistonda birinchi marta 3 ta expert bilan tuzilgan montaj bo’yicha 5 soatdan ortiq bo’ladigan amaliy masterclass
                        </p>
                    </div>
                </SlideProvider>
                <SlideProvider>
                    <div className="p-6 sm:p-8 md:p-10 bg-white rounded-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-7xl mx-auto">
                        <Image src={img2} alt='img2' className='w-full max-w-[80px] sm:max-w-full sm:w-auto' />
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium text-center sm:text-left'>
                            Xizmatingizni tog’ri ko’rsatish va uni bozorda sotish ko’nikmalarini o’rganish uchun
                        </p>
                    </div>
                </SlideProvider>
                <SlideProvider>
                    <div className="p-6 sm:p-8 md:p-10 bg-white rounded-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-7xl mx-auto">
                        <Image src={img3} alt='img3' className='w-full max-w-[80px] sm:max-w-full sm:w-auto' />
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium text-center sm:text-left'>
                            Bozorda top montaj bo’yicha kadr bo’lib yetishish uchun va o’z bilimlaringizni yaqqol ko’rsatib berish uchun
                        </p>
                    </div>
                </SlideProvider>
            </div>
            <SlideProvider>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                    <Image src={band} alt="login" className='max-w-[300px] lg:max-w-full h-auto' />
                </a>
            </SlideProvider>
        </div>
    )
}

export default Cause
