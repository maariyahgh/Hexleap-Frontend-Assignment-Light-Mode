import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const Frame1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke flex flex-col items-end justify-start pt-[46px] pb-[88px] pr-[83px] pl-[72px] box-border gap-[50px] tracking-[normal] mq750:gap-[25px_50px] mq750:pl-9 mq750:pr-[41px] mq750:box-border">
      <div className="w-[1445px] h-[1778px] relative bg-whitesmoke hidden max-w-full" />
      <FrameComponent4 />
      <section className="w-[1240px] flex flex-col items-start justify-start gap-[53px] max-w-full text-left text-31xl text-black font-poppins mq750:gap-[26px_53px]">
        <div className="w-[1150px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <button className="cursor-pointer [border:none] py-2.5 px-[30px] bg-cornflowerblue-100 rounded-10xs shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-200">
            <div className="relative text-sm leading-[26px] font-semibold font-inter text-white text-left inline-block min-w-[64px]">
              See More
            </div>
          </button>
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#f9f8ff,_#f3f9ff)] flex flex-col items-start justify-start pt-[70px] px-[77px] pb-[49px] box-border gap-[51px] max-w-full z-[1] lg:pl-[38px] lg:pr-[38px] lg:box-border mq750:gap-[25px_51px] mq1050:pt-[45px] mq1050:pb-8 mq1050:box-border mq450:pt-[29px] mq450:pb-[21px] mq450:box-border">
          <div className="w-[1240px] h-[918px] relative [background:linear-gradient(180deg,_#f9f8ff,_#f3f9ff)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
            <div className="w-[917px] flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <b className="relative leading-[105%] z-[1] mq1050:text-21xl mq1050:leading-[42px] mq450:text-11xl mq450:leading-[31px]">
                  Collection Spotlight
                </b>
              </div>
              <div className="self-stretch relative text-sm leading-[22.65px] font-inter text-center z-[1]">
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </div>
            </div>
          </div>
          <FrameComponent3 />
        </div>
      </section>
    </div>
  );
};

export default Frame1;
