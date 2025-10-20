import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


export default function Faq() {
    return (
        <section className=" w-full  justify-center items-center flex pb-[100px]  ">
            <article className="w-full max-w-[1240px] px-8 flex flex-col gap-10">
                <main className="flex flex-col items-center text-center gap-4">

                    <h1 className="font-akira text-[19px]">
                        FAQs
                    </h1>
                    <p className='font-dmsan font-semibold text-3xl md:text-[43px] text-app-black'>Have Inquiries? Find Answers Here</p>
                </main>
               
                    <main className="w-full ">
                        <Accordion type="single" defaultValue="item-1" collapsible className="flex flex-col gap-[30px]">
                            <AccordionItem
                                value="item-1"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    Is Driply an app or a marketplace?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    Both. It's an app where vendors, creators, and shoppers connect. But unlike a marketplace, Driply is
                                    powered by content — every product is linked to real videos and assets.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-2"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    Do I need followers to make sales or earn?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    No, you don't need followers to start making sales. Driply's algorithm helps discover your products based
                                    on quality and relevance.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-3"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    Can I shop directly in Driply?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    Yes, you can browse and purchase products directly within the Driply app with a seamless checkout
                                    experience.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-4"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    How do creators get paid?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    Creators earn commissions on sales generated through their content. Payments are processed monthly to your
                                    connected bank account.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-5"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    What products are allowed on Driply?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    We support a wide range of products including fashion, beauty, home goods, electronics, and more. Check
                                    our guidelines for restricted items.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-6"
                                className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]"
                            >
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    Is there a cost to join?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    No, joining Driply is completely free. We only take a commission on sales you make through the platform.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7" className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-[10px] border-0 px-4 md:px-[30px] flex flex-col gap-[10px]">
                                <AccordionTrigger className="font-dmsan text-lg md:text-[23px] font-medium text-black hover:no-underline text-left">
                                    What makes Driply different?
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-[19px] font-dmsan font-normal text-black text-left">
                                    Driply combines the best of social commerce and marketplace features. Our content-first approach means
                                    every product tells a story through videos and real assets.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </main>
                
            </article>
        </section>
    )
}

