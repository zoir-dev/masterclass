import Image from 'next/image'

import img1 from '@/assets/result1.png'
import img2 from '@/assets/result2.png'
import img3 from '@/assets/result3.png'
import img4 from '@/assets/result4.png'
import img5 from '@/assets/result5.png'

import band from '@/assets/band.png'
import SlideProvider from '@/providers/slide'

const Result = () => {
    return (
        <div className='flex flex-col items-center gap-6 sm:gap-16 px-4'>
            <SlideProvider>
                <h1 className="max-w-[1126px] mx-auto text-center">
                    Master-classdan keyin siz shu natijalarga erishasiz.
                </h1>
            </SlideProvider>
            <div className='flex flex-wrap gap-4 sm:gap-8 justify-center'>
                {data.map((d, index) => (
                    <SlideProvider key={index}>
                        <div className='w-full sm:max-w-[290px] bg-[#2E2E2E] rounded-xl flex flex-col gap-5 items-center py-4 sm:py-5 px-4 sm:px-7'>
                            <Image src={d.img} alt='alt' className='max-w-[60px] sm:max-w-full' />
                            <p className='text-2xl text-center'>{d.body}</p>
                        </div>
                    </SlideProvider>
                ))}
            </div>
            <SlideProvider>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uQQbEsV1hLVxvRefmeeDyGIbkdg-E9WLh-wp3w5v8HElNg/viewform?usp=sharing" target='_blank'>
                    <Image src={band} alt="login" className='max-w-[300px] lg:max-w-full h-auto' />
                </a>
            </SlideProvider>
        </div>
    )
}

export default Result

const data = [
    {
        img: img1,
        body: "Montajingiz sifati 5x ga yaxshilanadi."
    },
    {
        img: img2,
        body: "Mobilografiya bozorida 90% mutaxasisslardan ajralib turasiz"
    },
    {
        img: img3,
        body: "Kreativlik va kontent boyicha skillaringiz oshadi"
    },
    {
        img: img4,
        body: "Hozirgi bozor uchun kereli kadr bo’lib chiqasiz va daromadingizni 500-1000$ gacha oshira olasiz"
    },
    {
        img: img5,
        body: "Katta networkingga ega bo’lasiz (maxsus mehmonlar va blogerlar taklif qilingan)"
    }
]