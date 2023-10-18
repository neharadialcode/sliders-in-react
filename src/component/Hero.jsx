import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Hero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = null;
  let slider2 = null;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);
  return (
    <div className="container mx-auto px-4 py-5">
      {/* <Slider {...settings}>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-red-400">
            1
          </h3>
        </div>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-blue-400">
            2
          </h3>
        </div>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-pink-400">
            3
          </h3>
        </div>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-green-400">
            4
          </h3>
        </div>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-yellow-400">
            5
          </h3>
        </div>
        <div>
          <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-orange-400">
            6
          </h3>
        </div>
      </Slider> */}

      <div className="container mx-auto px-4 py-5">
        <div>
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            fade={true}
          >
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-red-400">
                1
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-blue-400">
                2
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-pink-400">
                3
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-green-400">
                4
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-yellow-400">
                5
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-orange-400">
                6
              </h3>{" "}
            </div>
          </Slider>
          <h4>Second Slider</h4>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-red-400">
                1
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-blue-400">
                2
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-pink-400">
                3
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-green-400">
                4
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-yellow-400">
                5
              </h3>
            </div>
            <div>
              <h3 className="h-[200px] p-4 text-[20px] flex flex-col justify-center items-center bg-orange-400">
                6
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
