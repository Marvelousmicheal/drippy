import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const comparisonData = [
    {
        id: 1,
        without: 'Post and hope',
        with: 'Link content, track sales, get ranked',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 2,
        without: 'Ad spend or boosting',
        with: 'Performance-based visibility',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 3,
        without: 'Manual DMs for UGC',
        with: 'Preview + buy content directly',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 4,
        without: 'Manual stock edits',
        with: 'Auto-sync inventory',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 5,
        without: 'One-store checkout',
        with: 'Multi-vendor cart',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 6,
        without: 'Brand deal wait',
        with: 'Earn per asset',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
    {
        id: 7,
        without: 'Separate tools',
        with: 'All-in-one dashboard',
        withoutIcon: '/icons/sad.svg',
        withIcon: '/icons/happy.svg',
    },
];

export default function Benefits() {
    return (
        <section className="w-full justify-center items-center flex pb-[100px]">
            <article className="w-full md:w-[1240px] flex flex-col gap-10 items-center justify-center px-4 md:px-0">
                <main className="w-full flex flex-col gap-6 text-app-black items-center text-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-akira text-2xl md:text-3xl">Why driply stands out</h2>
                        <p className="font-dmsan text-base font-medium">
                            Rooted in community, powered by innovation — Driply <br className="hidden md:block" /> bridges authenticity with the future of fashion.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Button className="h-[56px] p-4 rounded-[60px]" variant="default">
                            Get started for free
                        </Button>
                    </div>
                </main>
                <main className='w-full md:h-[694px] rounded-[15px] shadow-[0px_4px_32px_0px_#d3d3d380] p-4 md:p-[30px]'>
                    <div className='hidden md:flex justify-between mb-[53px]'>
                        <div className='w-full md:w-[28rem] md:pl-[5.5rem]'>
                            <p className='font-dmsan font-black text-[27px] text-app-black uppercase'>Without driply</p>
                        </div>
                        <p className='font-dmsan font-black text-[27px] text-app-black'>VS</p>
                        <div className='w-full md:w-[28rem]'>
                            <p className='font-dmsan font-black text-[27px] text-app-black'>WITH DRIPLY</p>
                        </div>
                    </div>

                    {comparisonData.map((item, index) => (
                        <div key={item.id} className={`md:border-b md:border-[#D3D3D3] ${index === comparisonData.length - 1 ? 'md:border-b-0' : ''}`}>
                            <div className='w-full justify-between flex flex-col md:flex-row md:border-0 border-b border-[#D3D3D3] md:px-[44px] py-[28px]'>
                                <div className='flex flex-col md:flex-row gap-[25px] mb-4 md:mb-0'>
                                    <div className="md:hidden font-dmsan font-black text-lg text-app-black uppercase mb-2">Without driply</div>
                                    <div className="flex items-center gap-4">
                                        <span>
                                            <Image src={item.withoutIcon} width={25} height={25} alt='sad face' />
                                        </span>
                                        <p className='font-semibold text-base font-dmsan'>{item.without}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-[25px] md:w-[333px]'>
                                    <div className="md:hidden font-dmsan font-black text-lg text-app-black uppercase mb-2">With driply</div>
                                    <div className="flex items-center gap-4">
                                        <span>
                                            <Image src={item.withIcon} width={25} height={25} alt='happy face' />
                                        </span>
                                        <p className='font-semibold text-base font-dmsan'>{item.with}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </article>
        </section>
    );
}