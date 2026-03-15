import Header from "./components/Header";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header title="User Dashboard" />
      <UserList />
    </div>
  );
};

export default App;

