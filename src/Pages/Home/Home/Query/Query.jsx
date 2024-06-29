import svg1 from "../../../../assets/images/icons/svg1.svg";
import svg2 from "../../../../assets/images/icons/svg2.svg";
import svg3 from "../../../../assets/images/icons/svg3.svg";
const Query = () => {
  return (
    <div className="w-full h-[250px] mx-auto bg-[#151515] rounded-xl mt-[130px]  flex items-center justify-center  ">
      <div className="mr-5 ">
        <img src={svg1} alt="" />
      </div>
      <div className="text-white mb-2 mr-16 ">
        <p>We are open monday-friday</p>
        <p>7:00 am - 9:00 pm</p>
      </div>
      <div className="mr-5">
        <img src={svg2} alt="" />
      </div>
      <div className="text-white mb-2 mr-16 ">
        <p>Have a question?</p>
        <p>+2546 251 2658</p>
      </div>
      <div className="mr-5">
        <img src={svg3} alt="" />
      </div>
      <div className="text-white mb-2 mr-16 ">
        <p>Need a repair? our address</p>
        <p>Liza Street, New York</p>
      </div>
    </div>
  );
};

export default Query;
