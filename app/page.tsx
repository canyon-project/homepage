import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {ArrowRightIcon, MoonIcon} from "@radix-ui/react-icons";
import AppMainLeft from "@/components/app/main/left";
import HomeSwiper from "@/components/app/main/swiper";

export default function Home() {
  return (
    <div className={'w-[1248px] m-auto'}>
      <div className={'h-[200px]'}></div>
      <div className={'flex justify-between gap-8'}>
        <AppMainLeft/>
        <HomeSwiper/>
      </div>

    </div>
  )
}
