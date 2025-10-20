import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";




const tabData = [
    {
        value: "vendors",
        title: "Vendors",
        heading: "Content sells. Driply just makes it trackable.",
        description: "Seamless links between content and commerce — finally <br/> bridging what inspires with what converts.",
        features: [
            "View earnings on your dashboard & Withdraw securely via Stripe",
            "List products, tag them in your videos, and sell directly through content",
            "Replace slow DMs with real-time purchases and verified orders ",
            "Send contract offers to creators easily for collaborations",
        ],
        buttonText: "Become a Vendor",
        image: "/vendor.png"
    },
    {
        value: "Creators",
        title: "Creators",
        heading: "Get paid for what you’re already good at.",
        description: "Transform everyday influence into real income — from the outfits you wear to the content you share.",
        features: [
            "Sell pre-priced content templates or accept custom video gigs",
            "Monetize each video directly—no agencies, no delay",
            "Tag products, earn commissions, and track your sales",
            "Withdraw earnings anytime through your Driply’s Wallet",
        ],
        buttonText: "Become a Creator",
        image: "/creator.png"
    },
    {
        value: "Shoppers",
        title: "Shoppers",
        heading: "Less Searching. More Finding. Shopping Made Effortless.",
        description: "Discover styles you love without the endless scroll — fashion that feels curated just for you.",
        features: [
            "Browse curated content and shop instantly",
            "Shop securely with Stripe-backed payments",
            "Save your favorite finds to your personal Wardrobe",
            "Request custom videos or styling advice from creators you trust",
        ],
        buttonText: "Start shopping",
        image: "/shopper.png"
    },
];


export default function Platform() {
  return (
  <section className=" w-full  justify-center items-center flex pb-[100px]  ">
            <article className="w-full max-w-[1240px] px-8 flex flex-col gap-6">
<h1 className="font-akira text-[23px] text-center lg:text-left">
    Who Utilizes the Driply <br/> Platform?
</h1>
<main className="w-full ">
    <Tabs defaultValue="vendors" className="w-full  gap-6">
  <div className="w-full overflow-x-auto">
    <TabsList className="w-max h-[72px] bg-[#f5ffff] rounded-[60px] px-[13px] py-[6px]">
      {tabData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="w-[200px] h-[60px] rounded-[60px] font-dmsan font-semibold text-base data-[state=active]:bg-app-black data-[state=active]:text-white text-app-black">{tab.title}</TabsTrigger>
      ))}
    </TabsList>
  </div>
  {tabData.map((tab) => (
  <TabsContent key={tab.value} value={tab.value} className="w-full h-auto lg:h-[689px] flex flex-col lg:flex-row rounded-[40px] gap-0 lg:gap-[39px] shadow-[0px_4px_32px_0px_#d3d3d359]">
    <main className="w-full lg:w-1/2 h-[300px] lg:h-[689px] relative rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none">
<Image src={tab.image} alt={tab.title} fill className="object-cover rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none"/>
    </main>
    
    <main className="flex w-full lg:w-1/2 h-auto flex-col gap-[36px] p-8 lg:pr-[39px] lg:pt-[42px]">
        <h1 className="font-dmsan font-medium text-2xl lg:text-[35px]">{tab.heading}</h1>
        <p className="font-dmsan font-medium text-base lg:text-[19px]" dangerouslySetInnerHTML={{ __html: tab.description }} />
        <div className="flex flex-col w-full max-w-[474px] gap-8">
            {tab.features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
                <span>
                   <Image src="/icons/checked.svg" alt="checked" width={23.33} height={23.33}/> 
                </span>
                <p>{feature}</p>
            </div>
            ))}
        </div>
        <Button className="w-[191px] h-[56px] p-4 rounded-[60px] border border-app-black" variant="outline">{tab.buttonText}</Button>
    </main>
    </TabsContent>
    ))}
</Tabs>
</main>
            </article>
            </section>
  )
}

