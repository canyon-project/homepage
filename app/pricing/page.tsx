import PriBg from '@/components/app/price/PriBg';

const PricingPage = () => {
  return (
    <div>
      <div>
        <div className='relative'>
          <svg
            width='100vw'
            viewBox='0 0 1512 300'
            fill='none'
            xmlns='http://www.w3.org/3000/svg'
            className='absolute dark:mix-blend-difference'
          >
            <defs>
              <linearGradient id='background_svg__a' x1='100%' y1='100%' x2='0%' y2='0%'>
                <stop offset='0%' stopColor='var(--pink5)'></stop>
                <stop offset='100%' stopColor='var(--blue5)' stopOpacity='0'></stop>
              </linearGradient>
            </defs>
            <path d='M0 0h1545L0 300V0Z' fill='url(#background_svg__a)'></path>
          </svg>
        </div>
        <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6 py-28'>
          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-default leading-[1.29] tracking-[-0.022rem] max-md-gutters:leading-[1.3333] max-sm-gutters:leading-[1.3913] text-[49px] leading-[1.204] max-md-gutters:text-[43px] max-md-gutters:leading-[1.2093] max-sm-gutters:text-[37px] max-sm-gutters:leading-[1.2973] font-black'>
              Incredible apps.
              <br /> Pricing to match.
            </h1>
            <h3 className='text-[20px] leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] font-normal text-secondary my-6 max-w-[40ch]'>
              Build, submit, and update your app, all with pricing that scales as you grow.
            </h3>
            <a
              className='inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-11 px-6 text-base border-button-primary bg-button-primary text-button-primary shadow-xs hocus:bg-button-primary-hover active:scale-98 z-10'
              type='button'
              href='/signup?redirect_uri=/accounts/[account]/settings/billing'
            >
              <span className='flex self-center text-inherit leading-none select-none'>
                Get Started
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className='relative mx-auto max-w-[1250px] w-full max-w-screen-xl-gutters px-6 mb-28'>
        <div className='relative mb-8'>
          <a href='/pricing#get-started'>
            <h2
              className='text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] mb-2 text-default'
              id='get-started'
            >
              Start your app for free
            </h2>
          </a>
          <p className='font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary'>
            Get started creating projects, build them into app-store-ready apps, then update them
            instantly.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6 max-md-gutters:grid-cols-1'>
          <div className='rounded-md border border-secondary bg-default shadow-xs'>
            <div className='border-b border-b-secondary px-6 py-4'>
              <div className='flex items-center justify-between gap-y-4 max-md-gutters:flex-col max-md-gutters:items-start'>
                <div className='grid gap-1 overflow-hidden'>
                  <div className='grid items-center gap-3 overflow-hidden grid-cols-[min-content,auto]'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='none'
                      role='img'
                      className='icon-md text-icon-default'
                    >
                      <path
                        d='M9.477 7.638c.164-.24.343-.27.488-.27.145 0 .387.03.551.27 2.13 2.901 6.55 10.56 6.959 10.976.605.618 1.436.233 1.918-.468.475-.69.607-1.174.607-1.69 0-.352-6.883-13.05-7.576-14.106-.667-1.017-.884-1.274-2.025-1.274h-.854c-1.138 0-1.302.257-1.969 1.274C6.883 3.406 0 16.104 0 16.456c0 .517.132 1 .607 1.69.482.7 1.313 1.086 1.918.468.41-.417 4.822-8.075 6.952-10.977z'
                        fill='currentColor'
                      ></path>
                    </svg>
                    <h4 className='text-default text-[16px] font-semibold leading-[1.625] tracking-[-0.011rem] truncate'>
                      Platform
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-6 py-5'>
              <ul className='text-default list-disc ml-6 [&amp;_ol]:mt-2 [&amp;_ol]:mb-4 [&amp;_ul]:mt-2 [&amp;_ul]:mb-4 !list-none'>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-sm absolute -left-6 top-1 text-icon-success'
                    role='img'
                  >
                    <g id='check'>
                      <path
                        id='Icon'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20 6L9 17L4 12'
                      ></path>
                    </g>
                  </svg>
                  Open-source SDK and CLIs
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-sm absolute -left-6 top-1 text-icon-success'
                    role='img'
                  >
                    <g id='check'>
                      <path
                        id='Icon'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20 6L9 17L4 12'
                      ></path>
                    </g>
                  </svg>
                  Develop on your device with Expo Go
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-sm absolute -left-6 top-1 text-icon-success'
                    role='img'
                  >
                    <g id='check'>
                      <path
                        id='Icon'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20 6L9 17L4 12'
                      ></path>
                    </g>
                  </svg>
                  Make development builds with custom native code
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-sm absolute -left-6 top-1 text-icon-success'
                    role='img'
                  >
                    <g id='check'>
                      <path
                        id='Icon'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20 6L9 17L4 12'
                      ></path>
                    </g>
                  </svg>
                  Top-notch docs and guides
                </li>
              </ul>
            </div>
          </div>
          <div className='rounded-md border border-secondary bg-default shadow-xs'>
            <div className='border-b border-b-secondary px-6 py-4'>
              <div className='flex items-center justify-between gap-y-4 max-md-gutters:flex-col max-md-gutters:items-start'>
                <div className='grid gap-1 overflow-hidden'>
                  <div className='grid items-center gap-3 overflow-hidden grid-cols-[min-content,auto]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='icon-md text-icon-default'
                      role='img'
                    >
                      <g id='build'>
                        <path
                          id='Vector 559'
                          fill='currentColor'
                          d='M12.0224 21.8566L11.5666 22.749C11.8524 22.8949 12.1907 22.8952 12.4767 22.7497L12.0224 21.8566ZM20.6687 6.60192H21.6707C21.6707 6.22522 21.4595 5.88035 21.1239 5.70925L20.6687 6.60192ZM20.6687 17.4585L21.123 18.3516C21.4591 18.1807 21.6707 17.8356 21.6707 17.4585H20.6687ZM3.41229 6.60192L2.95565 5.71002C2.62089 5.88142 2.41029 6.22583 2.41029 6.60192H3.41229ZM3.41229 17.4585H2.41029C2.41029 17.835 2.62126 18.1796 2.95649 18.3509L3.41229 17.4585ZM12.0225 2.19366L12.4776 1.30099C12.1911 1.15495 11.852 1.15524 11.5658 1.30176L12.0225 2.19366ZM13.0244 21.8566V11.0286H11.0204V21.8566H13.0244ZM12.4791 11.9205L21.1254 7.49382L20.2121 5.71002L11.5658 10.1367L12.4791 11.9205ZM19.6667 6.60192V17.4585H21.6707V6.60192H19.6667ZM20.2144 16.5654L11.5681 20.9635L12.4767 22.7497L21.123 18.3516L20.2144 16.5654ZM12.4806 10.1375L3.87044 5.7108L2.95414 7.49305L11.5643 11.9198L12.4806 10.1375ZM2.41029 6.60192V17.4585H4.41429V6.60192H2.41029ZM2.95649 18.3509L11.5666 22.749L12.4782 20.9643L3.8681 16.5662L2.95649 18.3509ZM3.86893 7.49382L12.4791 3.08556L11.5658 1.30176L2.95565 5.71002L3.86893 7.49382ZM11.5673 3.08634L20.2136 7.4946L21.1239 5.70925L12.4776 1.30099L11.5673 3.08634Z'
                        ></path>
                      </g>
                    </svg>
                    <h4 className='text-default text-[16px] font-semibold leading-[1.625] tracking-[-0.011rem] truncate'>
                      Build and Submit
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-6 py-5'>
              <ul className='text-default list-disc ml-6 [&amp;_ol]:mt-2 [&amp;_ol]:mb-4 [&amp;_ul]:mt-2 [&amp;_ul]:mb-4 !list-none'>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Build app-store-ready Android and iOS apps
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Cloud builds and submissions
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Includes 30 medium builds (up to 15 iOS) per month
                </li>
              </ul>
            </div>
          </div>
          <div className='rounded-md border border-secondary bg-default shadow-xs'>
            <div className='border-b border-b-secondary px-6 py-4'>
              <div className='flex items-center justify-between gap-y-4 max-md-gutters:flex-col max-md-gutters:items-start'>
                <div className='grid gap-1 overflow-hidden'>
                  <div className='grid items-center gap-3 overflow-hidden grid-cols-[min-content,auto]'>
                    svg
                    <h4 className='text-default text-[16px] font-semibold leading-[1.625] tracking-[-0.011rem] truncate'>
                      Update
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-6 py-5'>
              <ul className='text-default list-disc ml-6 [&amp;_ol]:mt-2 [&amp;_ol]:mb-4 [&amp;_ul]:mt-2 [&amp;_ul]:mb-4 !list-none'>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Send updates
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Preview with your team
                </li>
                <li className='text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] mb-2 text-secondary relative pl-1'>
                  svg Includes 1,000 monthly updated users
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-6 grid grid-cols-2 gap-6 max-md-gutters:grid-cols-1'>
          <div className='rounded-md border border-secondary bg-default shadow-xs'>
            <div className='px-6 py-5'>
              <div className='flex items-center justify-between gap-y-4 max-md-gutters:flex-col max-md-gutters:items-start'>
                <div className='grid gap-1 overflow-hidden'>
                  <div className='grid items-center gap-3 overflow-hidden grid-cols-[min-content,auto]'>
                    svg
                    <h3 className='text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] truncate'>
                      600K+ developers
                    </h3>
                  </div>
                </div>
              </div>
              <p className='font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mt-3'>
                Join over 600,000 developers using Expo's platform and services to deliver apps to
                millions of end-users.
              </p>
            </div>
          </div>
          <div className='rounded-md border border-secondary bg-default shadow-xs'>
            <div className='px-6 py-5'>
              <div className='flex items-center justify-between gap-y-4 max-md-gutters:flex-col max-md-gutters:items-start'>
                <div className='grid gap-1 overflow-hidden'>
                  <div className='grid items-center gap-3 overflow-hidden grid-cols-[min-content,auto]'>
                    svg
                    <h3 className='text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] truncate'>
                      Batteries included
                    </h3>
                  </div>
                </div>
              </div>
              <p className='font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mt-3'>
                Get access to all our core EAS functionality for free (no credit card required).
              </p>
            </div>
          </div>
        </div>
      </div>

      <PriBg/>
    </div>
  );
};

export default PricingPage;
