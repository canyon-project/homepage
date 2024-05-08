import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import HeaderNav from "@/components/header/nav";
import "./globals.css";
import 'antd/dist/reset.css'
import Footer from "@/components/footer";
const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
    <body>
    <HeaderNav/>
    <AntdRegistry>{children}</AntdRegistry>
    <Footer/>
    </body>
    </html>
);

export default RootLayout;