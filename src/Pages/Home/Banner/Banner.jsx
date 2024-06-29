import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="w-[1140px] mx-auto">
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white  space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end     transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide6"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811] mr-5"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811]"
            >
              ❯
            </a>{" "}
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white  space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end    bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide1"
              className="btn btn-circle btn-outline  text-white mr-5 hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline  text-white hover:bg-[#FF3811]"
            >
              {" "}
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white  space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end   bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide2"
              className="btn btn-outline text-white btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white  space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end   bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide3"
              className="btn btn-outline text-white btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white  space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end   bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide4"
              className="btn btn-outline text-white btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" />
          <div
            className="absolute flex  rounded-xl items-center left-0 top-0 bottom-0
        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full
        "
          >
            <div className="text-white   space-y-8 w-1/2 pl-24">
              <h2 className="text-6xl font-bold  ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold hover:text-black border-none mr-5 text-white">
                  Discover More
                </button>
                <button className="btn w-[170px] h-[56px]  btn-outline text-lg font-semibold hover:btn-primary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex  justify-end bottom-0    transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide5"
              className="btn btn-outline text-white btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-outline text-white btn-circle hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
