import Firebase from "./components/Firebase";
import Firestore from "./components/Firestore";
import Hosting from "./components/Hosting";
import Login from "./components/Login";
import Storage from "./components/Storage";



function App() {
  return (
    <div className="">
      <Firebase/>
      <Login/>
      <Firestore/>
      <Storage/>
      <Hosting/>
    </div>
  );
}

export default App;
