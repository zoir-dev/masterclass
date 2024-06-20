'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import login from '@/assets/login.png'
import SlideProvider from '@/providers/slide';
const Deadline = () => {
    const calculateTimeLeft = (): { days?: number, hours?: number, minutes?: number, seconds?: number } => {
        const difference = +new Date('2024-06-26T08:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<{ days?: number, hours?: number, minutes?: number, seconds?: number }>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <div className="text-center flex flex-col items-center gap-10 sm:gap-16 px-4">
            <SlideProvider>
                <div className="flex flex-col gap-4 sm:gap-7 md:gap-10">
                    <h1 className="max-w-[1126px] mx-auto">
                        NARXLAR OSHISHIGA KAM VAQT QOLDI!
                    </h1>
                    <p className="text-2xl sm:text-3xl font-medium">
                        Quyidagi vaqt tugagandan so’ng qabul yopiladi.
                    </p>
                </div>
            </SlideProvider>
            <SlideProvider>
                <div className="flex  items-start gap-4 sm:gap-7 md:gap-10">
                    <div>
                        <p className='text-3xl md:text-5xl xl:text-7xl font-medium'>{timeLeft?.days}</p>
                        <span className='text-xl md:text-2xl xl:text-3xl font-medium pt-3'>Kun</span>
                    </div>
                    <span className='text-3xl md:text-5xl xl:text-7xl -mt-2'>:</span>
                    <div>
                        <p className='text-3xl md:text-5xl xl:text-7xl font-medium'>{timeLeft?.hours}</p>
                        <span className='text-xl md:text-2xl xl:text-3xl font-medium pt-3'>Soat</span>
                    </div>
                    <span className='text-3xl md:text-5xl xl:text-7xl -mt-2'>:</span>
                    <div>
                        <p className='text-3xl md:text-5xl xl:text-7xl font-medium'>{timeLeft?.minutes}</p>
                        <span className='text-xl md:text-2xl xl:text-3xl font-medium pt-3'>Daqiqa</span>
                    </div>
                    <span className='text-3xl md:text-5xl xl:text-7xl -mt-2'>:</span>
                    <div>
                        <p className='text-3xl md:text-5xl xl:text-7xl font-medium'>{timeLeft?.seconds}</p>
                        <span className='text-xl md:text-2xl xl:text-3xl font-medium pt-3'>Soniya</span>
                    </div>
                </div>
            </SlideProvider>
            <SlideProvider>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                    <Image src={login} alt="login" className='max-w-[300px] lg:max-w-full h-auto' />
                </a>
            </SlideProvider>
        </div>
    )
}

export default Deadline