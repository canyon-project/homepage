import React from 'react';
import community from '@/config/community.json';
import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  const isZhHans = false;

  const transformContent = (content: { name?: string; href?: string; description: string }) => {
    // if (!content.name || content.description.includes('$')) return content.description;

    const descriptionSplit = content.description.split('$');
    return (
      <div>
        {descriptionSplit[0]}
        <Link href={content.href} target='_blank'>
          {content.name}
        </Link>
        {descriptionSplit[1]}
      </div>
    );
  };
  return (
    <section className='text-center px-8 '>
      <h1>Join Community</h1>
      <p>Ask questions about the documentation and project</p>

      <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-8 lg:space-y-0 my-8'>
        {community
          .filter((data) => data.lang === (isZhHans ? 'zh-Hans' : 'en'))
          .map((item, i) => {
            return (
              <div key={i} className='w-72 flex flex-col items-center'>
                <Image
                  src={`/community/${item.img}`}
                  alt='community-img'
                  width={72}
                  height={72}
                  className={'w-12 h-12'}
                  role='img'
                />
                <div className='font-bold'>{item.title}</div>
                <div>{transformContent(item.content)}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Community;
