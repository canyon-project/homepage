'use client'
import {
  CloudOutlined,
  GithubOutlined,
  MutedOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import {
  HomepageCompanies, HomepageFeedback,
  HomepageLearn,
  HomepageMainBoard,
  HomepagePinglun,
  HomepageWorkflows
} from "@/components/hompage";
const pinglunDataSource = [
  {
    authorName: "Deputy Director of Testing",
    authorNickname: "Lexin",
    avatar: "/ui/img/pinglun/lx.jpg",
    comment: `AREX has effectively increased the team's ratio of automated cases, enhanced the efficiency of business delivery, and shortened the delivery cycle.`,
  },
  {
    authorName: "Testing Technology Lead",
    authorNickname: "UnitedImagingIntelligence",
    avatar: "/ui/img/pinglun/lyyl.png",
    comment:
      "With AREX, we have implemented full automation testing by using real production traffic, significantly improving testing and release efficiency.",
  },
  {
    authorName: "Test Development Engineer",
    authorNickname: "aFintechCompany",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    comment: `Seeking platform integration in R&D, we found AREX's cost-effective open-source solution superior. Integrating its test pass rate into CI has significantly benefited our operations.`,
  },
];
const feedbackDataSource = [
  {
    icon: <ReadOutlined/>,
    link: "https://docs.canyoncov.com/",
    text: "Read the docs",
  },
  {
    icon: <GithubOutlined/>,
    link: "https://github.com/canyon-project",
    text: "Join the community",
  },
  {
    icon: <CloudOutlined/>,
    link: "https://app.canyoncov.com/",
    text: "About Cloud Canyon",
  },
  {
    icon: <MutedOutlined/>,
    link: "https://docs.canyoncov.com/",
    text: "Read our blog",
  },
];
export default function Home() {
  const companiesDataSource = [
    {
      zIndex: 0,
      image: (
        <img
          src="/ui/img/user-company/trip.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 0,
      image: (
        <img
          src="/ui/img/user-company/lexing.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 0,
      image: (
        <img
          src="/ui/img/user-company/xingyun.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 1,
      image: (
        <img
          src="/ui/img/user-company/lianying.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 1,
      image: (
        <img
          src="/ui/img/user-company/lingjian.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 1,
      image: (
        <img
          src="/ui/img/user-company/shunhuishou.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 2,
      image: (
        <img
          src="/ui/img/user-company/xiaoyudian.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 2,
      image: (
        <img
          src="/ui/img/user-company/yika.jpg"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
    {
      zIndex: 2,
      image: (
        <img
          src="/ui/img/user-company/yiliu.png"
          alt=""
          className={"h-[40px]"}
        />
      ),
    },
  ];

  return (
    <>
      <HomepageMainBoard
        banner={
          <div>
            <img className={'w-[600px]'} src="https://raw.githubusercontent.com/canyon-project/canyon/main/screenshots/architecture.png" alt=""/>
          </div>
        }
        copywriter={{
          firstLine: "Canyon Lets You",
          secondLine: "Easily obtain e2e coverage metrics.",
          threeCores: ["instrument", "automate", "report"],
          introduction:
            "Using simple babel configuration to locate code coverage probes and integration with ci/cd tools, developers can easily obtain code coverage metrics for automated tests.",
        }}
        onClickSignUp={() => window.open("https://app.canyoncov.com/")}
        onClickLearnWhatNew={() => window.open("https://github.com/canyon-project/")}
        onClickReadDocs={() => window.open("https://docs.canyoncov.com/getting-started/first-coverage")}
      />
      <HomepageCompanies
        dataSource={companiesDataSource}
        topRightButton={<div>1122</div>}
      />
      <HomepageLearn
        copywriter={[
          "Canyon is a JavaScript code coverage collection platform. We solve the problem of difficult code coverage collection for developers and QA engineers in end-to-end testing.",
            "Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks.",
            `Canyon supports the collection of various types of test coverage`,
            `- e2e test，such as Cypress、Puppeteer、Playwright`,
            `- ut test，such as Jest、Mocha`
        ]}
      />
      <HomepageWorkflows
        dataSource={[
          {
            title: "instrument",
            children: [
              {
                title: 'High Coverage Without Writing Tests',
                desc: `Simply integrate AREX Agent into your application
to automatically capture API calls as test cases.`,
                img: <img src="/ui/img/workflows/img_02.png" alt="" className={"w-[480px]"}/>
              },
              {
                title: 'Mock third party dependencies',
                desc: `Record dependencies like DBs, redis, third-party services
as mocks for more reliable, affordable testing.`,
                img: <img src="/ui/img/workflows/img_03.png" alt="" className={"w-[480px]"}/>
              }
            ]
          },
          {
            title: "automate",
            children: [
              {
                title: 'Data Security Assurance',
                desc: `Provides granular permission control and automatic
traffic desensitization to enhance your data security.`,

                img: <img src="/ui/img/workflows/img_21.png" alt="" className={"w-[480px]"}/>
              },
              {

                title: 'Automate Testing with Mocks',
                desc: `Intercept and respond to third-party service calls with
pre-recorded data, ensuring a rapid and reliable testing
experience without the setup of test environment.`,
                img: <img src="/ui/img/workflows/img_22.png" alt="" className={"w-[480px]"}/>
              }
            ]
          },
          {
            title: "report",
            children: [
              {
                title: `Intelligent Test Reporting`,
                desc: `AREX will compare the API response to the previously captured
response and a report will be generated, identifying potential
code bugs through response discrepancies.`,
                img: <img src="/ui/img/workflows/img_11.png" alt="" className={"w-[480px]"}/>
              },
              {
                title: `Accurate Noise Detection`,
                desc: `AREX identifies noisy fields in the responses accurately
like ( timestamps, random values) to ensure high quality tests.`,
                img: <img src="/ui/img/workflows/img_12.png" alt="" className={"w-[480px]"}/>
              }
            ]
          },
        ]}
      />
      {/*<Workflows />*/}
      {/*<Workflows />*/}
      <HomepagePinglun
        dataSource={pinglunDataSource}
        onClickSignUp={() => window.open("https://app.canyoncov.com/")}
      />
      <HomepageFeedback dataSource={feedbackDataSource}/>
      {/*<footer className={"h-[500px]"} />*/}
    </>
  );
}
