import Image from "next/image";
import {Button, ConfigProvider} from "antd";

const HeaderNav = ()=>{
    return <div className={'flex justify-between p-3'} style={{borderBottom:'1px solid #d7dbdf'}}>


        <div className={'flex items-center'}>
            <img src={'/logo.png'} className={'w-[36px] h-[24px]'} alt={''} />
            <h1 className="text-xl font-bold mb-0">AREX</h1>
        </div>

        <div className={'flex gap-2'}>
            <Button type={'text'} size={'large'}>Home</Button>
            <Button type={'text'} size={'large'}>Docs</Button>
            <Button type={'text'} size={'large'}>Pricing</Button>
            <Button type={'text'} size={'large'}>Download</Button>
            <Button type={'primary'} size={'large'}>Get Start</Button>
        </div>

    </div>
}
export default HeaderNav