import "../App.css";
import "../style/style.css";
import "../style/grid.css";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <body>
      <div class="wrap-body">
        <Header />
        <Section />
        <Footer />
      </div>
    </body>
  );
}

export default HomePage;