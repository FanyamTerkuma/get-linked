import React from 'react';
import background from '../assets/svgs/purple-lens-flare.svg';
import flare from '../assets/svgs/lens-flare.svg';
import { PiStarFourFill } from 'react-icons/pi';
import chain from '../assets/svgs/chain.svg';
import boom from '../assets/svgs/boom.svg';
import bulb from '../assets/svgs/bulb.svg';
import man from '../assets/svgs/man-wearing-smart-glasses-touching-virtual-screen.svg';
import virtualScreen from '../assets/svgs/virtual-screen.svg';
import Button from './Button';
function Hero() {
    return (
        <>
            <div className='px-4 py-6 h-fit'>
                <img className='h-[100%] absolute top-0 z-40' src={background} alt='ee' />
                <div className='grid grid-rows-2'>
                    <div className='py-4 flex justify-between'>
                        <div className='w-1/2 px-12'>
                            <PiStarFourFill size={24} />
                        </div>
                        <div className='w-1/2'>
                            <p className='font-bold text-4xl italic '>Igniting a Revolution in HR Innovation</p>
                            <div className='flex justify-end px-6'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='263' height='25' viewBox='0 0 263 25' fill='none'>
                                    <g filter='url(#filter0_d_120_4)'>
                                        <path d='M5 14.043C47.3333 5.7097 158.4 -5.95697 258 14.043' stroke='#FF26B9' stroke-width='5' />
                                    </g>
                                    <defs>
                                        <filter
                                            id='filter0_d_120_4'
                                            x='0.517151'
                                            y='0.500031'
                                            width='261.975'
                                            height='23.9959'
                                            filterUnits='userSpaceOnUse'
                                            color-interpolation-filters='sRGB'>
                                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                                            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                                            <feOffset dy='4' />
                                            <feGaussianBlur stdDeviation='2' />
                                            <feComposite in2='hardAlpha' operator='out' />
                                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_120_4' />
                                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_120_4' result='shape' />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='z-50 mt-[-20%] ml-[10%]'>
                            <img className='ml-[68%] mb-[-2%]' src={bulb} alt='bulb' />
                            <div className='text-7xl font-bold flex flex-col gap-3'>
                                <p>getlinkedTech</p>
                                <div className='flex  items-center'>
                                    Hackathon <span className='text-pink'>1.0</span> <img src={chain} alt='chain' /> <img src={boom} alt='kah-boom' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 py-3'>
                                <p className='w-[78%] text-xl'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                                <div className='py-4'>
                                    <Button />
                                </div>
                            </div>
                            <div className=' ml-[80%]  mb-[5%]'>
                                <PiStarFourFill size={24} color='gray' />
                            </div>
                            <div>
                                <div className=' font-normal text-6xl flex items-center font-unica'>
                                    00 <p className='text-sm mt-6'>H</p> 00 <p className='text-sm mt-6'>M</p> 00 <p className='text-sm mt-6'>S</p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-56 right-0 z-30'>
                            <div>
                                <img src={man} alt='man in vr glasses' />
                            </div>
                            <div className='absolute top-0 right-16'>
                                <img src={virtualScreen} alt='virtual screen' />
                            </div>
                        </div>
                        <div className='absolute z-20 top-0 right-0'>
                            <img className='scale-x-[-1]' src={flare} alt='purple flare' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[4.8%] border-b border-gray-600'></div>
        </>
    );
}

export default Hero;
