import Header from "src/components/OldHeader";
import UserContext from "src/context/User";
import Home from "./components/Home";
function App() {
  return (
    <UserContext>
      <Header />
      <Home />
    </UserContext>
  );
}
 
export default App;
