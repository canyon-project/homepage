import {ArrowRightIcon, MoonIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";

const AppMainLeft = () => {
  return <div>
    <a className="mb-8
            inline-flex items-center rounded-full border
            border-red-300 bg-red-100 text-xs text-red-600
            transition-colors duration-300 hover:bg-red-200"
       href="/changelog">
      <div className="flex items-center gap-2 py-1 pl-4 pr-5">
        <MoonIcon/>
        Learn what’s new!
        <ArrowRightIcon/>
      </div>
    </a>
    <h1 className={'text-4xl mb-5'} style={{lineHeight:'1.5'}}>


      <span>AREX</span>
      <br/>
      Automated Regression Testing Platform
      <br/>
      <span
        className="inline-block pb-2 px-2 rounded-md bg-blue-100 text-blue-500 text-4xl mr-2">
              mock
          </span>

      <span
        className="inline-block pb-2 px-2 rounded-md bg-orange-100 text-orange-500 text-4xl mr-2">
              compare
          </span>
      <span className={'mr-2'}>&</span>
      <span
        className="inline-block pb-2 px-2 rounded-md bg-green-100 text-green-500 text-4xl mr-2">
              agent
          </span>
    </h1>

    <p className={'text-[#687076] mb-10'} style={{fontSize:'18px'}}>AREX is a tool that automates regression testing by recording real traffic from<br/> the online environment to the test environment, solving the problem of regression testing.</p>

    <div className={'gap-2 flex'}>
      <Button size={'lg'}>Sign Up for Free<ArrowRightIcon/></Button>
      <Button size={'lg'}  variant={'outline'}>Read the Docs<ArrowRightIcon className={'text-border'}/></Button>
    </div>
  </div>
}

export default AppMainLeft;
