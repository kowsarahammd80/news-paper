import React from "react";
import papger from "../../assets/imageprocessor.jpeg";
import nextPage from "../../assets/imageprocessor (1).jpeg";
import "./Homepage.css";
import paperHead1 from "../../assets/paper1.jpg";
import paperHaed2 from "../../assets/paper.jpg";
import paperHeadline3 from "../../assets/paper2.jpg";
import secondSectionLeftImg from "../../assets/img-2nd-headlin-1.jpg";
import secondSectionRightImg from "../../assets/img-2nd-head-right-1.jpg";
import secondSectionRightImgCol3 from "../../assets/second-right-img-col-3.jpg";
import secondSectionRightImgCol4 from "../../assets/second-img-col-4.jpg";
import thersdSectionleftImg from "../../assets/therd-img-left-col-1.jpg";
import fouthSectionLeftImgCol2 from '../../assets/fouth-left-col-2.jpg';
import fourthSetionRightImgCol2 from '../../assets/fouth-right-img-col-2.jpg';
import namazTime from '../../assets/namz.jpg';
import fifthRightImg from '../../assets/fifth-right.jpg'



const Homepage = () => {
  return (
    <div className="">
      <section className="">
        {/* paper date */}

        <div className="bg-red-500 w-full lg:w-96 p-1 mb-4">
          <div className="flex justify-between items-center">
            <p className=" text-sm lg:text-xl xl:text-xl xxl:text-xl text-white font-semibold ">
              পুরনো সংখ্যা
            </p>
            <input type="date" defaultValue={`{new Date()}`} className="h-9" />
          </div>
        </div>

        {/* paper page */}

        <div>
          <div>
            <p className="bg-green-500 text-sm lg:text-xl xl:text-xl xxl:text-xl text-white font-semibold text-center">
              সকল পাতা
            </p>
          </div>
          <div className="w-full flex overflow-x-scroll border">
            <img
              src={papger}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={nextPage}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={papger}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={nextPage}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={papger}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={nextPage}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={papger}
              alt=""
              className="paper-img-set me-2 lg:me-5 xl:me-5 md:me-3 border cursor-pointer"
            />
            <img
              src={nextPage}
              alt=""
              className="paper-img-set me-2 border cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* pager section */}

      <section className="border my-5">
        <div className="mx-2 lg:mx-10 xl:mx-10 md:mx-6">
          {/* paper hadling */}

          <div className=" my-2">
            <div className="grid grid-cols-6">
              <div className="col-span-1 headinLeft-imgSet-div img-hover-set">
                <img src={paperHead1} alt="" className="w-full h-full" />
              </div>

              <div className="col-span-5">
                <div className="img-hover-set">
                  <img src={paperHaed2} alt="" className="paper-name-heading" />
                </div>

                <div className="grid grid-cols-3 ">
                  <div className="img-hover-set paper-headline-rightSide-imgs-div">
                    <img
                      src={paperHeadline3}
                      alt=""
                      className="paper-headline-rightSide-imgs"
                    />
                  </div>

                  <div className="img-hover-set paper-headline-rightSide-imgs-div">
                    <img
                      src={paperHeadline3}
                      alt=""
                      className="paper-headline-rightSide-imgs"
                    />
                  </div>

                  <div className="img-hover-set paper-headline-rightSide-imgs-div">
                    <img
                      src={paperHeadline3}
                      alt=""
                      className="paper-headline-rightSide-imgs"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="underLIne" />

            {/* second section */}

            <div className="grid grid-cols-2 mt-1">
              <div className="second-grid-left-img-div img-hover-set">
                <img
                  src={secondSectionLeftImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="second-grid-left-img-div">
                {/* second section up */}

                <div className="grid grid-cols-5">
                  <div className="col-span-1 second-left-side-img-div img-hover-set">
                    <img
                      src={secondSectionRightImg}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  <div className="col-span-3 second-left-side-img-div img-hover-set">
                    <img
                      src={secondSectionRightImgCol3}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  <div className="col-span-1 second-left-side-img-div img-hover-set">
                    <img
                      src={secondSectionRightImg}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* second section down */}

                <div className="grid grid-cols-5 ">
                  <div className="col-span-1 second-left-side-img-div img-hover-set">
                    <img
                      src={secondSectionRightImg}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  <div className="col-span-4 second-left-side-img-div img-hover-set">
                    <img
                      src={secondSectionRightImgCol4}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* therd section */}

            <div className="grid grid-cols-8 mt-1">
              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={thersdSectionleftImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-3 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImgCol3}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-3 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImgCol3}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* fouthSection */}

            <div className="grid grid-cols-8 mt-1">
              <div className="col-span-2 theard-section-img-div img-hover-set">
                <img
                  src={fouthSectionLeftImgCol2}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-2 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImgCol3}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-2 theard-section-img-div img-hover-set">
                <img
                  src={fourthSetionRightImgCol2}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
   
            {/* fifth Section */}

            <div className="grid grid-cols-8 mt-1">
              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={namazTime}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-2 theard-section-img-div img-hover-set">
                <img
                  src={secondSectionRightImgCol3}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-3 theard-section-img-div img-hover-set">
                <img
                  src={fifthRightImg}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="col-span-1 theard-section-img-div img-hover-set">
                <img
                  src={fourthSetionRightImgCol2}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
