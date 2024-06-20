
import tg from '@/assets/tg.png'
import inst from '@/assets/insta.png'
import Image from 'next/image'
import SlideProvider from '@/providers/slide'
const Footer = () => {
    return (
        <SlideProvider>
            <footer className='flex flex-col items-center text-center gap-6 sm:gap-16 px-4'>
                <div className='space-y-3 md:space-y-5'>
                    <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold'>HALI HAM SAVOLLARINGIZ QOLDIMI?</h2>
                    <p className='text-xl md:text-2xl font-medium'>Unda ijtimoiy tarmoqlar orqali bog’laning</p>
                </div>
                <div className='flex gap-16'>
                    <a href="https://t.me/montajdarslari">
                        <Image src={tg} alt='tg' />
                    </a>
                    <a href="https://www.instagram.com/ubayda.be?igsh=Y3FycjE5b3c4NG16">
                        <Image src={inst} alt='insta' />
                    </a>
                </div>
            </footer>
        </SlideProvider>
    )
}

export default Footer