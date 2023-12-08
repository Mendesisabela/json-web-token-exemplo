'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import 'react-toastify/dist/ReactToastify.min.css';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import './style.css'

export default function Alter() {
    const [alter, setAlter] = useState({
      name: '', 
      email: '', 
      password: ''
    });

const { push, refresh } = useRouter();

const Alterar = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/alter');
    } catch {
      refresh();
    }

const success = true;
    if (success) {
       toast.success('Login alterado com sucesso!');
    } else {
       toast.error('Ocorreu um erro ao alterar o login.');
     }
   }


    return (
        <body>
        <ul>
        <li><a href={"/pages/alter"} class="active">Alterar</a></li>
        <li><a href={"/pages/dashboard"}>Home</a></li>
        <li><a href={"/pages/register"}>Cadastrar</a></li>
       </ul>


       <div class="page"> 
            <form class="alter" onSubmit={Alterar}>
        <h1>Alterar</h1>
        <p>Digite suas informações para alteração nos campos abaixo.</p>

        <label for="text">Nome</label>
        <input 
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(e) => { setAlter({ ...alter, name: e.target.value }) }}/>

        <label for="text">E-mail</label>
        <input 
        type="email" 
        placeholder="Digite seu e-mail" 
        onChange={(e) => { setAlter({ ...alter, email: e.target.value }) }}/>

        <label for="password">Senha</label>
        <input 
        type="password" 
        placeholder="Digite sua " 
        onChange={(e) => { setAlter({ ...alter, password: e.target.value }) }}/>

        <button className="button">Alterar</button>
        <ToastContainer />
    </form>
    </div>

        </body>
        );
    };
