import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./App.css"
import BootTheme from "./Components/BootTheme";
import BootIcons from "./Components/BootIcons";
import BootPlugin from "./Components/BootPlugin";
import BootBuild from "./Components/BootBuild";
import BootInstall from "./Components/BootInstall";
import BootMain from "./Components/BootMain";
import BootCustomize from "./Components/BootCustomize";
import BootUtility from "./Components/BootUtility";

function App() {
  return (
    <div className="App">
      <Header />
      <BootMain/>
      <BootInstall/>
      <BootCustomize/>
      <BootBuild/>
      <BootUtility/>
      <BootPlugin/>
      <BootIcons/>
      <BootTheme/>
      <Footer />
    </div>
  );
}

export default App;
