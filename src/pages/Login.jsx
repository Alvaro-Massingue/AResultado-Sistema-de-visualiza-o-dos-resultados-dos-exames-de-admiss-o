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
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      if (isMobile) {
        alert(
          "O painel de administrador não está disponível em dispositivos móveis.",
        );
        navigate("/");
      } else {
        navigate("/adminPanel");
        setResponse("");
      }
    } else {
      setResponse("Usuario ou senha invalido");
    }
  };

  return (
    <div className="w-full bg-gray-50 m-0 flex flex-col items-center gap-10 h-screen">
      <Header isAuthenticated={true} />
      <div className="w-[90%] h-screen bg-white mb-7  rounded-2xl mt-32 shadow shadow-gray-400 flex flex-col justify-center items-center gap-2 shrink md:w-[25%]">
        <div className="flex flex-wrap wrap-break-word shrink m-5">
          <h1 className="text-sky-500 font-bold text-xl md:text-2xl w-[60%]">
            Bem vindo
          </h1>
          <p className="text-gray-800">Acesse a sua conta</p>
        </div>
        <div className="w-[80%] border bg-gray-200 min-h-25 p-3 flex flex-wrap justify-start wrap-break-word shrink gap-2 rounded-xl border-gray-400">
          <span
            className="material-symbols-outlined basis-[10%] grow-0 shrink  text-sky-500 
          [font-variation-settings:'FILL'_1,'wght'_800,'GRAD'_0,'opsz'_24]"
          >
            person
          </span>
          <div className="text-sm text-gray-800 shrink">
            <h1 className="font-medium text-base text-black">Administrador</h1>
            <p>Usuario: admin</p>
            <p>Palavra-passe: admin</p>
          </div>
        </div>
        <p className="text-red-600 text-sm md:text-base w-[80%]">{response}</p>
        {errorUser ? (
          <p className=" text-red-600 text-sm md:text-base w-[80%]">
            Preencha este campo
          </p>
        ) : (
          <p className=" text-gray-800 w-[80%]">Usuario</p>
        )}
        <input
          className="h-10 w-[80%] border bg-gray-50 border-gray-400 rounded-xl text-gray-800 outline-0 focus:border focus:border-sky-500 focus:text-sky-500 pl-3"
          type="text"
          placeholder="nome"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        {errorPass ? (
          <p className=" text-red-600 text-sm md:text-base w-[80%]">
            Preencha este campo
          </p>
        ) : (
          <p className=" text-gray-800 w-[80%]">Senha</p>
        )}
        <input
          className="h-10 w-[80%] border focus:text-base text-xl bg-gray-50 border-gray-400 rounded-xl outline-0 text-gray-800 focus:border focus:border-sky-500 focus:text-sky-500 pl-3"
          type="password"
          placeholder="*****"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-[80%] mb-5 h-10 bg-sky-500 text-white rounded-xl mt-5 cursor-pointer md:hover:border md:hover:bg-blue-700"
          onClick={() => {
            if (user == "" && password == "") {
              setErrorUser(true);
              setErrorPass(true);
              setResponse("");
            } else if (user == "") {
              setErrorUser(true);
              setErrorPass(false);
              setResponse("");
            } else if (password == "") {
              setErrorPass(true);
              setErrorUser(false);
              setResponse("");
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
