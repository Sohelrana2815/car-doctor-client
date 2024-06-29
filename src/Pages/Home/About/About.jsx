import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 border-8 border-white  top-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-10">
            <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
            <h1 className="text-5xl font-bold w-[376px] leading-normal ">
              We are qualified & of experience in this field
            </h1>
            <div className="leading-8 w-[490px]">
              <p className="py-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="py-6">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
            <button className="btn bg-[#FF3811] w-[170px] h-[56px] font-semibold text-lg text-white ">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
