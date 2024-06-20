import Image from 'next/image'
import login from '@/assets/login.png'
import guys from '@/assets/guys.png'
import SlideProvider from '@/providers/slide'

const Main = () => {
    return (
        <div className='pt-6 sm:pt-10 px-4'>
            <SlideProvider direction='down'>
                <p className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>
                    26-iyun
                    <br />
                    <span className='text-primary text-xl md:text-2xl lg:text-3xl'>1 kunlik offline master-class</span>
                </p>
            </SlideProvider>
            <div className='pt-10 md:pt-16 lg:pt-24 flex flex-col xl:flex-row items-center gap-10 lg:gap-32 md:px-8  2xl:pl-36'>
                <SlideProvider direction='left'>
                    <div className='flex flex-col gap-6 2xl:gap-10'>
                        <h1 className='text-3xl md:text-5xl xl:text-6xl 2xl:text-[68px] font-bold'>
                            “<span className='text-primary'>Expert montaj vs Avtomotiv montaj sirlari</span>” <br /> nomli Master-classga taklif qilamiz
                        </h1>
                        <p className='text-lg md:text-xl lg:text-[28px]'>
                            Montajda xatoliklar bo’layotgan bo’lsa va ko’nglingiz to’lmayotgan bo’lsa va mobilografiya sohasida daromadingiz past bo’lsa ushbu master classimiz aynan siz uchun!
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                                <Image src={login} alt="login" className='max-w-[300px] lg:max-w-full h-auto' />
                            </a>
                        </div>
                    </div>
                </SlideProvider>
                <SlideProvider direction='right'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <Image src={guys} alt="guys" className='max-w-full h-auto' />
                        <div className='flex flex-row gap-3 pt-8'>
                            <a href="https://www.instagram.com/ka.mronbe?igsh=MTEyc2ZjeGJibXRuYw==" target='_blank'>
                                <button className='text-sm sm:text-base bg-white hover:bg-primary duration-300 border-none py-2 px-3 sm:px-6 md:px-10 lg:px-14 rounded-lg text-black'>Ka.mronbe</button>
                            </a>
                            <a href="https://www.instagram.com/ubayda.be?igsh=MXgzZ2dqZXllcnl6bg==" target='_blank'>
                                <button className='text-sm sm:text-base bg-white hover:bg-primary duration-300 border-none py-2 px-3 sm:px-6 md:px-10 lg:px-14 rounded-lg text-black'>Ubayda.be</button>
                            </a>
                            <a href="https://www.instagram.com/rasca.jrg?igsh=dGg5MGZ5M21seHd6" target='_blank'>
                                <button className='text-sm sm:text-base bg-white hover:bg-primary duration-300 border-none py-2 px-3 sm:px-6 md:px-10 lg:px-14 rounded-lg text-black'>Rasca.jrg</button>
                            </a>
                        </div>
                    </div>
                </SlideProvider>
            </div>
        </div>
    )
}

export default Main
