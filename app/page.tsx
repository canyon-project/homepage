import Image from "next/image";
import {Button} from "antd";
import HeaderNav from "@/components/header/nav";
// import GetStarted from "@/components/GetStarted";
import FeatureCollapse from "@/app/components/FeatureCollapse";
import GetStarted from "@/app/components/GetStarted";
import HomepageFeatures from "@/app/components/HomepageFeatures";
import UserBrand from "@/app/components/UserBrand";
import Community from "@/app/components/Community";

export default function Home() {
  return (
      <>
          <GetStarted />

          {/*<FeatureCollapse />*/}

          <div className='flex flex-col items-center'>
              <main className='max-w-screen-xl space-y-8'>
                  <HomepageFeatures />

                  <UserBrand />

                  <Community />
              </main>
          </div>
      </>
  );
}
