import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const AppNav = () => {
  return (
    <div className={'flex justify-between h-[60px] border-b border-[#d7dbdf] px-4'}>
      <h1 className={'text-2xl font-bold'} style={{ lineHeight: '60px' }}>
        Arex
      </h1>
      <div className={'grid grid-flow-col items-center gap-2 max-lg-gutters:hidden'}>
        {/*<Button variant="ghost">Ghost</Button>*/}
        <Button variant='ghost' href={'https://arextest.com/'} target={'_blank'}>
          Docs
          <ArrowTopRightIcon/>
        </Button>

        {/*<Button variant="ghost">Tools</Button>*/}

        <Button variant='ghost' href={'/pricing'}>
          Pricing
        </Button>

        <Button variant='ghost' href={'https://github.com/arextest'} target={'_blank'}>
          {/*<StarOutlined />*/}
          Star Us on Github
        </Button>

        <Button type={'primary'} href={'/signup'}>
          Sign Up
        </Button>

        <Button variant='ghost' href={'/login'}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default AppNav;
