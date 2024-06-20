import Image from 'next/image'

import img1 from '@/assets/gift1.png'
import img2 from '@/assets/gift2.png'
import img3 from '@/assets/gift3.svg'

import btn from '@/assets/masterclass_btn.png'
import SlideProvider from '@/providers/slide'

const Gift = () => {
    return (
        <div className='flex flex-col gap-6 sm:gap-16 items-center px-4'>
            <SlideProvider>
                <div className='flex flex-col items-center gap-4 sm:gap-10'>
                    <h1>Siz uchun sovg’alarimiz mavjud</h1>
                    <p className='max-w-[1048px] text-xl sm:text-2xl md:text-3xl text-center'>
                        Sovg’alarni yutib olishingiz uchun faqat offline masterclassga qatnashishingiz kerak va berilgan shartlarni bajarishingiz kerak!
                    </p>
                </div>
            </SlideProvider>
            <div className='flex items-start flex-col gap-4 md:gap-0 md:flex-row'>
                <SlideProvider>
                    <Image src={img1} alt="gift" className='w-full' />
                </SlideProvider>
                <SlideProvider>
                    <Image src={img3} alt="gift" className='w-full hidden md:block' />
                </SlideProvider>
                <SlideProvider>
                    <Image src={img2} alt="gift" className='w-full' />
                </SlideProvider>
            </div>
            <SlideProvider>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                    <Image src={btn} alt="login" className='max-w-[350px] lg:max-w-full h-auto' />
                </a>
            </SlideProvider>
        </div>
    )
}

export default Gift