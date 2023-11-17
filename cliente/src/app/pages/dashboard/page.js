import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componentes/ListUsers";
import './style.css'

export default async function Dashboard() {
    const users = await getUsers();
    return(

        <body>
        <ul>
          <li><a href={"/pages/dashboard"} class="active">Home</a></li>
           <li><a href={"/pages/register"}>Cadastrar</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>

        <div class="usuarios">
            <Suspense fallback ={<p>Carregando...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
        </body>
    );
}; 
