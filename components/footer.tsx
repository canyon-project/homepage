// import { Button } from '../ui/button';

import {Button} from "antd";

const AppFooter = () => {
    return (
        <div className={'m-auto'}                 style={{borderTop: '1px solid #d7dbdf',backgroundColor:'white'}}>
            <div
                className={
                    'relative mx-auto max-w-screen-xl-gutters px-6 pb-20 pt-16 max-md-gutters:pb-10 max-md-gutters:pt-8 w-[1250px]'
                }

            >
                {/*<nav className={'grid grid-cols-4 gap-8 max-md-gutters:grid-cols-1 max-md-gutters:gap-0'}>*/}
                {/*    {[0, 0, 0, 0].map((item) => {*/}
                {/*        return (*/}
                {/*            <div key={item}>*/}
                {/*                <p className={'px-3.5 py-2 mb-0'}>Product</p>*/}
                {/*                <ul className={'list-none text-[#687076] pl-0'}>*/}
                {/*                    <li className={'px-3.5 py-2'}>*/}
                {/*                        Arex on GitHub*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</nav>*/}
                <section
                    className={
                        'flex items-center justify-between gap-6 max-md-gutters:mt-8 max-md-gutters:flex-wrap-reverse'
                    }
                >
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex items-center text-2xl font-bold cursor-pointer'}>CANYON</div>

                        <p className='font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] text-[#687076]'>
                            Copyright © 2024 Trip.com, Inc. All rights reserved.
                        </p>
                    </div>

                    <div
                        className={
                            'flex flex-1 items-center justify-end gap-4 max-md-gutters:justify-between max-sm-gutters:flex-col'
                        }
                    >
                        {/*<Button>*/}
                        {/*    All Systems Operational*/}
                        {/*</Button>*/}
                    </div>
                </section>
            </div>
        </div>

    );
};

export default AppFooter;
