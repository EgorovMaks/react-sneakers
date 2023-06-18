import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Content from "./pieces/Content";



function App() {
  return (
    <div className="wrap">
      <Header />
      <Drawer />
      <Content />
    </div>
  );
}

export default App;
