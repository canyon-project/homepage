import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import HomeSwiper from '@/components/home/swiper';

export default function Home() {
  return (
    <div className={'min-h-[100vh]'}>
      <div className={'flex mx-auto max-w-[1248px] pb-28 pt-32'}>
        <div>
          <div
          >
            <Button variant={'outline'}>
              <div className={'w-[16px] h-[16px] mr-2 inline-block'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='icon-sm text-palette-red10'
                  role='img'
                >
                  <g id='stars-02'>
                    <path
                      id='Fill'
                      fill='currentColor'
                      d='M13 3L14.7342 7.50886C15.0162 8.24209 15.1572 8.60871 15.3765 8.91709C15.5708 9.1904 15.8096 9.42919 16.0829 9.62353C16.3913 9.8428 16.7579 9.98381 17.4911 10.2658L22 12L17.4911 13.7342C16.7579 14.0162 16.3913 14.1572 16.0829 14.3765C15.8096 14.5708 15.5708 14.8096 15.3765 15.0829C15.1572 15.3913 15.0162 15.7579 14.7342 16.4911L13 21L11.2658 16.4911C10.9838 15.7579 10.8428 15.3913 10.6235 15.0829C10.4292 14.8096 10.1904 14.5708 9.91709 14.3765C9.60871 14.1572 9.24209 14.0162 8.50886 13.7342L4 12L8.50886 10.2658C9.24209 9.98381 9.60871 9.8428 9.91709 9.62353C10.1904 9.42919 10.4292 9.1904 10.6235 8.91709C10.8428 8.60871 10.9838 8.24209 11.2658 7.50886L13 3Z'
                      opacity='0.12'
                    ></path>
                    <path
                      id='Icon'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z'
                    ></path>
                  </g>
                </svg>
              </div>
              {/*</span>*/}
              Learn what’s new!
            </Button>
          </div>
          <h1 className='mb-6 mt-2 select-text !text-[37px] !font-normal !leading-[59px] !tracking-tight max-xl-gutters:!text-[32px] max-xl-gutters:!leading-[51px] max-sm-gutters:!text-[28px] max-sm-gutters:!leading-[45px] css-kh530j'>
            <span className='relative top-[3px] max-sm-gutters:top-0'>Automated Regression</span>
            <br />
            Testing Platform with Real Data
            <br className='max-sm-gutters:hidden' />
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-[#edf6ff] text-[#0081f1]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='icon-md inline h-7 w-7 text-palette-blue10 max-sm-gutters:icon-lg'
                role='img'
              >
                <g id='terminal-browser'>
                  <path
                    id='Fill'
                    fill='currentColor'
                    d='M22 9V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8L2 9L22 9Z'
                    opacity='0.12'
                  ></path>
                  <path
                    id='Icon'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M22 9H2M6 17.5L8.5 15L6 12.5M11 17.5L15 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z'
                  ></path>
                </g>
              </svg>
              develop
            </span>{' '}
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-[#fff1e7] text-[#ed5f00]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='icon-md -mx-0.5 inline h-7 w-7 text-palette-orange10 max-sm-gutters:icon-lg'
                role='img'
              >
                <g id='stoplight-duotone'>
                  <circle
                    id='Ellipse 168'
                    cx='12'
                    cy='7.16382'
                    r='3.8689'
                    fill='currentColor'
                    opacity='0.12'
                  ></circle>
                  <circle
                    id='Ellipse 169'
                    cx='12'
                    cy='16.8362'
                    r='3.8689'
                    fill='currentColor'
                    opacity='0.12'
                  ></circle>
                  <rect
                    id='Rectangle 935'
                    width='12.5084'
                    height='21.2134'
                    x='5.74585'
                    y='1.39331'
                    stroke='currentColor'
                    strokeWidth='2'
                    rx='6.25418'
                  ></rect>
                  <g id='Group 876'>
                    <circle
                      id='Ellipse 170'
                      cx='12'
                      cy='7.16382'
                      r='2.8689'
                      stroke='currentColor'
                      strokeWidth='2'
                    ></circle>
                    <circle
                      id='Ellipse 171'
                      cx='12'
                      cy='16.8362'
                      r='2.8689'
                      stroke='currentColor'
                      strokeWidth='2'
                    ></circle>
                  </g>
                </g>
              </svg>
              review
            </span>
            <span className='px-2'>&amp;</span>
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-[#e9f9ee] text-[#299764]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='icon-md inline h-7 w-7 text-palette-green10 max-sm-gutters:icon-lg'
                role='img'
              >
                <g id='rocket-01'>
                  <g id='Fill' opacity='0.12'>
                    <path
                      fill='currentColor'
                      d='M9.24755 7.90372C9.20591 7.88302 9.16282 7.86522 9.11859 7.85047L6.38022 6.93768C6.04914 6.82732 5.68447 6.89755 5.41805 7.12298L2.56089 9.54058C1.97597 10.0355 2.14215 10.9774 2.86113 11.2423L5.2868 12.136C5.3836 12.1716 5.48479 12.1919 5.58676 12.1966C5.7926 11.7305 6.0789 11.2909 6.446 10.8985L9.24755 7.90372Z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M11.7128 18.3386C11.7206 18.4257 11.7399 18.5117 11.7704 18.5945L12.6786 21.0596C12.9435 21.7786 13.8854 21.9448 14.3803 21.3599L16.7979 18.5027C17.0234 18.2363 17.0936 17.8716 16.9832 17.5406L16.1601 15.071C16.1171 14.9422 16.0489 14.8249 15.9609 14.7252L13.0221 17.4744C12.6265 17.8445 12.183 18.1324 11.7128 18.3386Z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M17.5009 6.3934C16.861 5.7535 16.0604 5.05452 15.2622 4.42277C14.7339 4.00462 14.4697 3.79555 14.4323 3.61921C14.3985 3.46027 14.437 3.31094 14.5433 3.1881C14.6613 3.05181 14.9832 2.99817 15.6268 2.89089L19.3484 2.27063C20.702 2.04503 21.8756 3.21858 21.65 4.57222L21.0306 8.28867C20.9229 8.93469 20.8691 9.2577 20.7328 9.37568C20.6099 9.48214 20.461 9.52059 20.3019 9.48692C20.1257 9.4496 19.9154 9.18446 19.495 8.65418C18.8563 7.84871 18.1484 7.04084 17.5009 6.3934Z'
                    ></path>
                  </g>
                  <path
                    id='Icon'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12.9999 10.9999L3.49989 20.4999M14.0183 3.53838C15.2363 4.34658 16.407 5.29941 17.501 6.3934C18.6045 7.49683 19.5643 8.67831 20.3769 9.90766M9.25485 7.89605L6.37998 6.93776C6.04889 6.8274 5.68422 6.89763 5.41781 7.12306L2.56065 9.54065C1.97572 10.0356 2.1419 10.9775 2.86089 11.2424L5.56808 12.2398M11.6809 18.3524L12.6783 21.0596C12.9432 21.7786 13.8851 21.9448 14.38 21.3599L16.7976 18.5027C17.0231 18.2363 17.0933 17.8716 16.9829 17.5405L16.0247 14.6657M19.3485 2.27063L14.442 3.08838C13.9122 3.17668 13.4262 3.43709 13.0593 3.82932L6.44625 10.8985C4.73209 12.7308 4.77977 15.5924 6.55402 17.3667C8.32827 19.1409 11.1898 19.1886 13.0222 17.4744L20.0914 10.8614C20.4836 10.4944 20.744 10.0085 20.8323 9.47869L21.6501 4.57222C21.8757 3.21858 20.7021 2.04503 19.3485 2.27063Z'
                  ></path>
                </g>
              </svg>
              deploy
            </span>
          </h1>

          <p className='mb-14 max-w-[540px] select-text !text-lg max-lg-gutters:mr-0 max-md-gutters:mb-10 css-1hfeqdb'>
            Real automated API testing with real data.
          </p>

          <div>
            <div gap='small' wrap='wrap'>
              <div
                style={{zoom: 1.2}}
                className={'flex gap-5 max-sm-gutters:flex-col'}
              >
                <Button type='primary' href={'/signup'}>
                  Sign Up for Free
                  <ArrowRightIcon/>
                </Button>
                <Button variant={'outline'} href={'https://arextest.com/'} target={'_blank'}>
                  Read the Docs
                  <ArrowTopRightIcon/>
                  {/*<Icon component={ClarityTagSolid}/>*/}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={'w-[600px] ml-10'}>
          <HomeSwiper></HomeSwiper>
        </div>
      </div>
      {/*<Button>Click me</Button>*/}
    </div>
  );
}
