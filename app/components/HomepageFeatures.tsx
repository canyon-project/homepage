import Image from 'next/image';
import React from 'react';

type FeatureItem = {
  title: string;
  img: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Normal API Testing',
    img: '/api-testing.svg',
    description:
      'Send requests to an API and evaluating the responses to ensure they meet the specified requirements and function as intended,with features like development, execution, verification, and management of test cases.',
  },
  {
    title: 'API Comparison Testing',
    img: '/comparison-testing.svg',
    description:
      'Verify the APIs are functioning as intended after a backend system re-architecture or upgrade by sending the same request message to APIs in different environments and comparing the differences in the response messages.',
  },
  {
    title: 'Traffic Recording and Replay',
    img: '/recording-replay.svg',
    description:
      'Record the real online traffic with the third-party dependency data, time and local cache type data, etc. mocked. Replay the traffic in testing environment to test the correctness of code logic.',
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={'text-center flex flex-col justify-center items-center'}>
      <Image
        src={img}
        alt='feature-img'
        width={48}
        height={48}
        className={'w-48 h-48 p-8'}
        role='img'
      />
      <div className={'font-bold'}>{title}</div>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='px-8 pt-8 lg:px-16 flex flex-col lg:flex-row justify-around items-center lg:items-start lg:space-x-16'>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
