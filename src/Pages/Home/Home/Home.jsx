import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Products from "./Products/Products";
import Query from "./Query/Query";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Query></Query>
      <Products></Products>
    </div>
  );
};

export default Home;
