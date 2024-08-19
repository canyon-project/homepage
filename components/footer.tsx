"use client";
// import { Button } from '../ui/button';

// import {Button} from "antd";
import appFooter from "../config/app-footer.json";
import { Button, Divider } from "antd";
import { EpTopRight } from "@/components/icons/RightTop";
import Icon from "@ant-design/icons";
const AppFooter = () => {
  return (
    <div
      className={"m-auto"}
      style={{ borderTop: "1px solid #d7dbdf", backgroundColor: "white" }}
    >
      <div
        className={
          "relative mx-auto max-w-screen-xl-gutters px-6 pb-20 pt-16 max-md-gutters:pb-10 max-md-gutters:pt-8 w-[1250px]"
        }
      >
        <nav
          className={
            "grid grid-cols-4 gap-8 max-md-gutters:grid-cols-1 max-md-gutters:gap-0"
          }
        >
          {appFooter.map((item) => {
            return (
              <div key={item.value}>
                <p className={"px-3.5 py-2 mb-0"}>{item.label}</p>
                <ul className={"list-none text-[#687076] pl-0"}>
                  {item.children.map((child) => {
                    return (
                      <li
                        style={{lineHeight:1.5}}
                        key={child.value}
                        className={
                          "px-3.5 py-2 flex items-center rounded gap-1 cursor-pointer hover:bg-gray-100"
                        }
                      >
                        {child.label}
                        <img
                          className={"w-[16px]"}
                          src="/icons/svgexport-27.svg"
                          alt=""
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
        <section
          className={
            "mt-20 flex items-center justify-between gap-6 max-md-gutters:mt-8 max-md-gutters:flex-wrap-reverse"
          }
        >
          <div className={"flex flex-col gap-4"}>
            <div
              className={
                "flex items-center text-2xl font-bold cursor-pointer gap-3"
              }
            >
              Canyon
              <Divider type={"vertical"} />
              <img src={"/icons/GitHub.svg"} />
              <img src={"/icons/X.svg"} />
              <img src={"/icons/Discord.svg"} />
            </div>

            <p className="font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] text-[#687076]">
              Copyright © 2024 Trip.com, Inc. All rights reserved.
            </p>
          </div>

          <div
            className={
              "flex flex-1 items-center justify-end gap-4 max-md-gutters:justify-between max-sm-gutters:flex-col"
            }
          >
            <Button>All Systems Operational</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppFooter;
