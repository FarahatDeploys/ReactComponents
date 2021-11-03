import "./App.css";
import Text from "./fullname";
import Profile from "./profilephoto";
import Addresses from "./adress";

const App = () => {
  return (
    <>
      <div className="MYProfile">
        <Text />
        <Profile />
        <Addresses />
      </div>
    </>
  );
};

export default App;
