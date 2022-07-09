import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [login, setLogin] = useState("login");
  const [password, setPassword] = useState("password");
  return (
    <>
      <input
        type="text"
        placeholder={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>{password.length > 8 ? "Good password" : "Password is too short"}</div>
      <button
        onClick={() => onLogin({ login, password})}
        disabled={
          (login.length > 3 ? false : true) ||
          (password.length > 8 ? false : true)
        }
      >
        login
      </button>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <LoginForm 
        onLogin={({login,password}) => alert(`Твой логин${login}. А еще я знаю твой пароль: ${password}. Ахаххахахха))))`)}
      />
    </div>
  );
}
export default App;
