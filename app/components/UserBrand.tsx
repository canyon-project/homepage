import React, { FC } from 'react';

import users from '@/config/users.json';

const brand = users.map((user, i) => {
  const url = new URL(user.infoLink);
  url.searchParams.append('utm_source', 'pnpm');
  url.searchParams.append('utm_medium', 'users_page');

  return (
    <a href={url.toString()} target='_blank' key={i} rel='noopener'>
      <img
        src={user.image}
        alt={user.caption}
        title={user.caption}
        style={{
          width: user.width ? `${user.width}px` : '128px',
          padding: '20px',
        }}
      />
    </a>
  );
});

const UserBrand: FC = () => {
  return (
    <section className='text-center mt-16'>
      <div>
        <div className={'text-2xl font-semibold'}>Who's Using?</div>
        {/*<Link*/}
        {/*  className={"button button--outline button--secondary button--lg"}*/}
        {/*  href="https://github.com/arextest/website/edit/dev/users.json"*/}
        {/*>*/}
        {/*  <Translate>Add your company</Translate>*/}
        {/*</Link>*/}
      </div>

      <div className='flex justify-center align-middle flex-wrap flex-row mt-8'>{brand}</div>
    </section>
  );
};

export default UserBrand;
