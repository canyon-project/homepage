'use client';

import React, { FC, useState } from 'react';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';

import featureJson from '@/config/feature.json';
// import FeatureImg from './FeatureImg';

export type FeatureType = { title: string; description: string; img: string };
const feature: FeatureType[] = featureJson;
const FeatureCollapse: FC = () => {
  const [activeKey, setActiveKey] = useState<number | undefined>(0);
  const [featureImg, setFeatureImg] = useState(feature[0].img);

  const handleChange = (key: string) => {
    if (!key) return;
    const index = parseInt(key);
    setActiveKey(index);
    setFeatureImg(feature[index]?.img);
  };

  return (
    <section className='bg-[color:#F3F6F9] dark:bg-inherit relative py-8 px-8 flex justify-center align-middle'>
      {/*<div className='lg:pl-8 flex w-full justify-around max-w-screen-xl'>*/}
      {/*  <Accordion*/}
      {/*    type='single'*/}
      {/*    collapsible*/}
      {/*    className='w-full'*/}
      {/*    defaultValue={'0'}*/}
      {/*    onValueChange={handleChange}*/}
      {/*  >*/}
      {/*    {feature.map((feature, index) => (*/}
      {/*      <AccordionItem key={index} value={`${index}`}>*/}
      {/*        <AccordionTrigger>{feature.title}</AccordionTrigger>*/}
      {/*        <AccordionContent>*/}
      {/*          <>*/}
      {/*            <div className='md:max-w-[640px]'>{feature.description}</div>*/}
      {/*            <FeatureImg className='lg:hidden' src={featureImg} />*/}
      {/*          </>*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}
      {/*    ))}*/}
      {/*  </Accordion>*/}
      {/*</div>*/}
    </section>
  );
};

export default FeatureCollapse;
