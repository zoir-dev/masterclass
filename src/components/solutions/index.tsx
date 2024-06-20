import Image from 'next/image'

import r from '@/assets/right.svg'
import c from '@/assets/center.svg'
import l from '@/assets/left.svg'

import band from '@/assets/band.png'
import SlideProvider from '@/providers/slide'
const Solutions = () => {
    return (
        <div className='px-4'>
            <SlideProvider>
                <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-[68px] font-bold text-center max-w-[1126px] mx-auto">
                    Bu masterclassda qanday muammolarizga yechim olasiz?
                </h1>
            </SlideProvider>
            <div className='flex flex-wrap justify-center max-w-[1500px] gap-4 sm:gap-10 w-full sm:w-auto mx-auto py-6 sm:py-16 box-content'>
                {data.map((d, i) => (
                    <div key={i} className='max-w-full'>
                        <SlideProvider key={i}>
                            <div className='border border-white rounded-xl p-5 pb-6 sm:pb-12 w-full max-w-full sm:max-w-[444px] flex flex-col gap-3 sm:gap-5 items-center'>
                                <div className='relative w-max mx-auto max-w-full'>
                                    <Image src={i % 3 === 0 ? r : i % 3 === 1 ? c : l} alt="left" className='w-full max-w-full' />
                                    <span
                                        className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  text-black text-8xl  md:text-[150px] font-bold'
                                    >
                                        {i < 9 ? `0${i + 1}` : i + 1}
                                    </span>
                                </div>
                                <h3 className='text-2xl sm:text-[28px] text-primary font-semibold'>
                                    {d.h}
                                </h3>
                                <p className='text-lg sm:text-2xl'>{d.p}</p>
                            </div>
                        </SlideProvider>
                    </div>
                ))}
            </div>
            <SlideProvider>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                    <Image src={band} alt="band" className='max-w-[300px] lg:max-w-full h-auto mx-auto' />
                </a>
            </SlideProvider>
        </div>
    )
}

export default Solutions

const data = [
    {
        h: "Expert montajda tog'ri ketma ketlikda ishlash",
        p: 'Eng asosiy etaplari va vaqtdan yutish yo’nalishlari bilan tanishib chiqish'
    },
    {
        h: "Futaj va perexodlar bilan to'g'ri ishlash",
        p: "To'g'ri va kreativ ishlash, xatoliklarni bartaraf etish + Futaj pack"
    },
    {
        h: "Background fonlar bilan to'g'ri ishlash",
        p: "Obyekt va background fonlarni kompozitsiyasi, mavzuga mos va to'g'ri ishlatish"
    },
    {
        h: "Nalojeniya va qo'shimcha animatsion smooth effectlar bilan to'g'ri ishlash",
        p: "To'g'ri smoothlik ustida ishlash, aynan nalojeniyalarni animatsiyalashtirish bo'yicha"
    },
    {
        h: "Кривые tochkalardan to'g'ri foydalanish bo'yicha dars",
        p: "Ko'pchilik qiynaladigan tochkalar ustida ishlash va prof darajada bo'lish"
    },
    {
        h: "Zoom in, zoom out instrumentlaridan to'g'ri foydalanish",
        p: "Aynan eng kereli instrumentni to'g'ri va vaqtida ishlatishni o'rganish"
    },
    {
        h: "Sound fx bilan to'g'ri ishlash",
        p: "Sound effektlar bilan tog'ri ishlashni o'rganasiz albatta eng muhim qismi + sound pack"
    },
    {
        h: "Textlar va subtitlar bilan to'g'ri ishlash",
        p: "Bunda ko'pchilik xato qiladi, videolarga montajda textlar bilan tog'ri va kreativ ishlash+ CAPTIONS AI"
    },
    {
        h: "Maska funksiyasidan to'g'ri foydalanish",
        p: "Bu funksiya orqali kreativ ishlash, buni bilmasangiz montajingiz aniq to'liq bo'lmaydi"
    },
    {
        h: "Avtomotive estetik va dinamik montaj",
        p: "Hozirgi paytdagi eng trenddagi mashina montajlarini shu masterklassni ozida 100% o’rganasiz"
    },
    {
        h: "Node video programmasidan to'g'ri foydalanish",
        p: "Eng aktual bo'lgan tracking founkiyasini to'g'ri berishni o'rganasiz"
    },
    {
        h: "Rang berish va qo'shimcha effectlar bilan ishlash",
        p: "Bu endi alohida katta mavzu, lekin buniham full o'rganasiz"
    }
]