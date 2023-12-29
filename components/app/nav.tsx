import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

const AppNav = () => {
  return (
    <div className={'flex justify-between h-[60px] border-b border-[#d7dbdf] px-4'}>
      <h1 className={'text-2xl font-bold'} style={{ lineHeight: '60px' }}>
        Arex
      </h1>
      <div className={'grid grid-flow-col items-center gap-2 max-lg-gutters:hidden'}>
        <Button variant='ghost'>
          Docs
          <ArrowTopRightIcon />
        </Button>
        <Button variant='ghost'>Pricing</Button>

        <Button variant='ghost'>Star Us on Github</Button>

        <Button>Sign Up</Button>

        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default AppNav;
