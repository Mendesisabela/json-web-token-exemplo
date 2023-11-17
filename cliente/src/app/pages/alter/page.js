'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';
import './style.css'

function Alter() {
    const Alterar = (event) => {
    toast.success("O usuário foi alterado!");
    event.preventDefault(); 
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
        <input type="text" placeholder="Digite seu nome"/>
        <label for="text">E-mail</label>
        <input type="text" placeholder="Digite seu e-mail"/>
        <label for="password">Senha</label>
        <input type="password" placeholder="Digite sua senha"/>

        <button className="button">Alterar</button>
        <ToastContainer />
    </form>
    </div>

        </body>
        );
    };
    export default Alter