'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import './style.css'

export default function Login() {
  const [user, setUser] = useState({
    nome: '',
    senha: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
     const userAuth = await handlerAcessUser(user);
     if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!");
     }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação.")
    }
  }


  
  return (
    <div class="page"> 
      <form onSubmit={handlerLogin} class="login">
        
      <h1>Login</h1>
       <input 
          id="nome" 
          type="text"  
          name="nome" 
          placeholder="E-mail" 
          onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}>
        </input>

      <input 
        id="senha" 
        type="password" 
        placeholder="Senha" 
        onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}>
        </input>



        <button className="button">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
}
