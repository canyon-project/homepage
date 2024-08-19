// import HeaderNav from "@/components/header/nav";

import { CheckOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export default function Pricing() {
  const data = [
    {
      type: "Community Edition",
      description: "No minimum users",
      price: "Free",
      features: ["Community Features", "Community Support"],
    },
    {
      type: "AREX Cloud",
      description: "Ideal for startups and mid-sized businesses",
      price: "Start free 30-day trial",
      features: [
        "All features in Community Edition",
        "Enterprise-level features",
        "Business day Support",
      ],
    },

    // {
    //     type:'Team',
    //     description:'For growing teams that collaborate',
    //     price:'$26/mo',
    //     features:['Unlimited users','Third-party integrations','Custom Alerts']
    //
    // },{
    //     type:'Business',
    //     description:'For multiple teams that operate at scale',
    //     price:'$80/mo',
    //     features:['Custom Dashboards','Cross-Project Issues','Advanced quota management']
    //
    // },

    {
      type: "AREX Enterprise",
      description:
        "Designed for large-scale deployments and complex integrations",
      price: "Custom",
      features: [
        "Optional Add-Ons",
        "Training and Certification",
        "24x7x365 Technical Support",
      ],
    },
  ];
  return (
    <div className={"m-auto w-[1250px]"}>
      <h1 className={"text-center mt-[60px] mb-[60px]"}>
        Pricing plans for dev teams of all sizes
      </h1>
      <div className={"flex gap-5 justify-around"}>
        {data.map(({ type, description, price, features }, index) => (
          <div key={index} className={"bg-white rounded-xl p-5 w-[360px]"}>
            <h2 className={"text-center"}>{type}</h2>
            <p className={"text-center"} style={{ fontSize: 14 }}>
              {description}
            </p>
            <p
              style={{ fontSize: "24px", fontWeight: "bolder" }}
              className={"text-center"}
            >
              {price}
            </p>

            <ul
              style={{
                fontSize: "16px",
                listStyle: "none",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
              className={"h-[120px]"}
            >
              {features.map((i, index) => (
                <li key={index} style={{ lineHeight: 2 }}>
                  <CheckOutlined
                    style={{ color: "green", marginRight: "10px" }}
                  />
                  {i}
                </li>
              ))}
            </ul>
            <div className={"text-center"}>
              {index === 0 && (
                <Button
                  type={"primary"}
                  style={{ textTransform: "uppercase" }}
                  href={"https://docs.arextest.com/docs/intro/"}
                >
                  get started
                </Button>
              )}

              {index === 1 && (
                <Button
                  type={"primary"}
                  style={{ textTransform: "uppercase" }}
                  href={"https://cloud.arextest.com"}
                >
                  start trial
                </Button>
              )}
              {index === 2 && (
                <Tooltip title={"arex.test.com@gmail.com"}>
                  <Button
                    type={"primary"}
                    style={{ textTransform: "uppercase" }}
                    href={"mailto:arex.test.com@gmail.com"}
                  >
                    Contact us
                  </Button>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={"h-[100px]"}></div>
    </div>
  );
}
