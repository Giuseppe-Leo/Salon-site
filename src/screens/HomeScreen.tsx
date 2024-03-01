import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default HomeScreen;
