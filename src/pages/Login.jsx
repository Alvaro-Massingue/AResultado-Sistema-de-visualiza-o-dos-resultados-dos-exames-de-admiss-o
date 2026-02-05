import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAdd } from "../data/user.mock";
import Header from "../components/Header";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const login = (userName, password) => {
    if (userName === userAdd.name && password === userAdd.password) {
      navigate("/adminPanel");
      setResponse("");
    } else {
      setResponse("Usuario ou senha invalido");
    }
  };

  return (
    <div className="w-full bg-linear-to-t from-sky-50 via-sky-50 to-white m-0 flex flex-col items-center gap-10 h-screen">
      <Header isAuthenticated={true} />
      <div className="w-[90%] h-3/4 bg-white rounded-2xl shadow shadow-gray-400 flex flex-col justify-center items-center gap-2 shrink md:w-[25%]">
        <p className="text-red-600 text-sm w-[80%]">{response}</p>
        {errorUser ? (
          <p className=" text-red-600 text-sm w-[80%]">Preencha este campo</p>
        ) : (
           <p className=" text-gray-700 font-medium w-[80%]">Usuario</p>
        )}
        <input
          className="h-10 w-[80%] border border-gray-400 rounded-2xl text-gray-600 outline-0 focus:border focus:border-blue-500 focus:text-blue-500 pl-3"
          type="text"
          placeholder="Adimin"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        {errorPass ? (
          <p className=" text-red-600 text-sm w-[80%]">Preencha este campo</p>
        ) : (
          <p className=" text-gray-700 font-medium w-[80%]">Palavra-passe</p>
        )}
        <input
          className="h-10 w-[80%] border border-gray-400 rounded-2xl outline-0 text-gray-600 focus:border focus:border-blue-500 focus:text-blue-500 pl-3"
          type="password"
          placeholder="Palavra-passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-[80%] h-10 bg-blue-500 text-white rounded-2xl mt-5 cursor-pointer md:hover:border md:hover:bg-blue-700"
          onClick={() => {
            if (user == "" && password == "") {
              setErrorUser(true);
              setErrorPass(true);
            } else if (user == "") {
              setErrorUser(true);
               setErrorPass(false);
            } else if (password == "") {
              setErrorPass(true);
              setErrorUser(false);
            } else {
              login(user, password);
              !setErrorUser();
              !setErrorPass();
            }
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
