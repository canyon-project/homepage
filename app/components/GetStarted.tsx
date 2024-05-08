import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import {Button} from "antd";
// import { Button } from '@/components/ui/button';

const GetStarted: FC = () => {
  const isZhHans = false;
  const colorMode = 'light';

  return (
    <section
        // style={{border: '1px solid red',overflow:'hidden'}}
      className={
        'w-full p-4 text-zinc-50 bg-[color:#0370cf] dark:bg-[color:#013767] flex justify-center'
      }
    >
      <div className='max-w-screen-xl text-center flex flex-col lg:flex-row items-center lg:pl-8'>
        <div className='lg:basis-[480px] shrink-0 py-8 lg:flex lg:flex-col text-zinc-50'>
          <Image
            width={32}
            height={32}
            src='/arex.svg'
            alt='arex'
            className='inline-block w-32 h-16 md:w-60 md:h-32 lg:ml-8'
          />
          <p className='hero__subtitle text-xl md:text-xl lg:text-left px-8'>
            Automated Regression Testing Platform with Real Data
          </p>
          <div className='mt-8 px-8 lg:flex'>
            <Button>
              <Link href='https://docs.arextest.com/' className='button button--secondary button--lg'>
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        <img
          src={`/arex-home-${colorMode}-${isZhHans ? 'zh' : 'en'}.png`}
          alt='arex-home'
          className='h-fit lg:max-w-[800px] shrink-1'
        />
      </div>
    </section>
  );
};

export default GetStarted;
