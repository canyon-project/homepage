import Image from "next/image";
import { Button, ConfigProvider } from "antd";

const HeaderNav = () => {
  return (
    <div className={""} style={{ borderBottom: "1px solid #d7dbdf" }}>
      <div className={"m-auto w-[1250px] flex justify-between py-3"}>
        <a
          className={"flex items-center"}
          href={"/"}
          style={{ textDecoration: "none", color: "unset" }}
        >
          <img src={"/logo.svg"} className={"w-[36px] h-[24px]"} alt={""} />
          <h1 className="text-xl font-bold mb-0">Canyon</h1>
        </a>

        <div className={"flex gap-2"}>
          <Button type={"text"} href={"/"}>
            Home
          </Button>
          <Button type={"text"} href={"https://docs.canyoncov.com"}>
            Docs
          </Button>
          <Button type={'text'} href={'/pricing'}>Pricing</Button>
          {/*<Button type={'text'} >Download</Button>*/}
          <Button type={"primary"} href={"https://app.canyoncov.com"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HeaderNav;
