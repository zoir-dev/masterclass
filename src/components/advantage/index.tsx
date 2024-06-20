import Image from 'next/image'

import user1 from '@/assets/u.png'
import user2 from '@/assets/k.png'
import user3 from '@/assets/r.png'

import check from '@/assets/check.svg'
import price from '@/assets/price.png'
import login from '@/assets/login.png'
import SlideProvider from '@/providers/slide'
const Advantage = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row items-center px-4'>
            <div className='z-20'>
                <SlideProvider direction='left'>
                    <div className="p-8 bg-white w-[90%] sm:w-max rounded-xl flex md:flex-col gap-8 -mb-20 md:mb-0 md:-mr-20 ">
                        <a href="https://www.instagram.com/ka.mronbe?igsh=MTEyc2ZjeGJibXRuYw==" target='_blank'>
                            <Image src={user1} alt="user1" />
                        </a>
                        <a href="https://www.instagram.com/ubayda.be?igsh=MXgzZ2dqZXllcnl6bg==" target='_blank'>
                            <Image src={user2} alt="user2" />
                        </a>
                        <a href="https://www.instagram.com/rasca.jrg?igsh=dGg5MGZ5M21seHd6" target='_blank'>
                            <Image src={user3} alt="user3" />
                        </a>
                    </div>
                </SlideProvider>
            </div>
            <SlideProvider direction='right'>
                <div className='bg-[#2E2E2E] gap-4 sm:gap-8 max-w-[590px] p-4 sm:p-8 rounded-xl pt-28 md:pt-8 md:pl-28 flex flex-col'>
                    <h2 className='text-xl sm:text-2xl text-primary'>
                        Ubayda.be , Ka.mronbe, Rasca.jrg ning offline masterclassga qatnashish avzalliklari
                    </h2>
                    <div className='flex flex-col gap-4 sm:gap-8 pt-4 sm:pt-8'>
                        <div className='flex items-start gap-3'>
                            <Image src={check} alt="check" className='pt-2' />
                            <p className='text-xl sm:text-2xl'>
                                Tajribali expertlar bilan 5soatdan ortiq amaliyot
                            </p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Image src={check} alt="check" className='pt-2' />
                            <p className='text-xl sm:text-2xl'>
                                Montaj bo’yicha top bo’lish yo’llari
                            </p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Image src={check} alt="check" className='pt-2' />
                            <p className='text-xl sm:text-2xl'>
                                Montaj bo’yicha qilingan videolar razborlari
                            </p>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Image src={check} alt="check" className='pt-2' />
                            <p className='text-xl sm:text-2xl'>
                                Qo’shimcha top speakerlar va sovg’alar
                            </p>
                        </div>
                    </div>
                    <div className='pt-6 flex justify-between items-center'>
                        <div className='text-right text-nowrap'>
                            <p className='line-through text-xl'>669000 so’m</p>
                            <p className='text-3xl sm:text-4xl font-bold'>259000 so’m</p>
                        </div>
                        <Image src={price} alt='price' />
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                        <Image src={login} alt="login" className='max-w-[300px] mx-auto lg:max-w-full h-auto' />
                    </a>
                </div>
            </SlideProvider>
        </div>
    )
}

export default Advantage