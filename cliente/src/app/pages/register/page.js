'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postUser } from '@/app/functions/handlerAcessAPI';
import { ToastContainer, toast } from 'react-toastify';
import './style.css'

export default function Register() {
    const [user, setUser] = useState({
      nome: '',
      senha: '',
      confirmar: ''
    });

const { push, refresh } = useRouter();

const Registro = async (e) => {
    e.preventDefault();
    try {
      await postUser(user);
      push('/pages/dashboard');
    } catch {
      return toast.error('Error');
  }

  const success = true;
  if (success) {
     toast.success('Usuário cadastrado com sucesso!');
   } else {
     toast.error('Ocorreu um erro ao cadastrar o usuário.');
   }
 };
 
    return (
    <body>
        <ul>
        <li><a href={"/pages/register"} class="active">Cadastrar</a></li>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>



      <div class="page"> 
            <form class="register" onSubmit={Registro} >

        <h1>Cadastrar</h1>
        <p>Digite suas informações de registro nos campos abaixo.</p>

        <label for="text">Nome</label>
        <input type="text" placeholder="Digite seu nome" name="nome" value={user.nome} onChange={(e) => {setUser({ ...user, nome: e.target.value});}}/>



        <label for="text">Senha</label>
        <input type="password" placeholder="Digite sua senha" name="senha" value={user.senha} onChange={(e) => {setUser({ ...user, senha: e.target.value});}}/>


        <label for="password">Confirmar Senha</label>
        <input type="password" placeholder="Confirme sua senha" name="confirmar" value={user.confirmar} onChange={(e) => {setUser({ ...user, confirmar: e.target.value});}}/>

        <button className="button">Registrar</button>
        <ToastContainer />
    </form>
    </div>

    </body>


    );
};