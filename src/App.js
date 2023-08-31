import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <h1>Hola Mundo!</h1>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <hr />
      <Profile />
    </div>
  );
}

export default App;
