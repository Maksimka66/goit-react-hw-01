import renderProfile from "./Profile/Profile";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </>
  );
};

export default App;
