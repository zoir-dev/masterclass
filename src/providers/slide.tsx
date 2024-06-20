'use client'

import { Slide } from 'react-awesome-reveal'

const SlideProvider = ({ children, direction = 'up' }: { children: React.ReactNode, direction?: 'up' | 'down' | 'left' | 'right' }) => {
    return (
        <div className='relative'>
            <Slide direction={direction} triggerOnce>
                {children}
            </Slide>
        </div>
    )
}

export default SlideProvider