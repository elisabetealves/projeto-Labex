import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/Base_url"
import { goBack, goToListTrip, goHome } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'
import { MainForm, ButtonDiv } from "./styled"
import { IoIosRocket } from "react-icons/io"

const LoginPage = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState("")
   const [senha, setSenha] = useState("")

   const onChangeEmail = (event) => {
      setEmail(event.target.value);
   };

   const onChangeSenha = (event) => {
      setSenha(event.target.value);
   };

   const onSubmitLogin = () => {

      const body = {
         email: email,
         password: senha,
      };
      axios
         .post(`${BASE_URL}/login`, body)
         .then((res) => {
            localStorage.setItem("token", res.data.token);
            navigate("/admin/trips/list")
         })
         .catch((err) => {
            alert("Login ou senha não autorizado");
         });
   };

   useEffect(() => {
      if (localStorage.getItem("token")) {
         navigate("/admin/trips/list");
      }
   });

   return (
      <div>
         <Header
            first={{ function: goToListTrip, text: "Viagens" }}
            second={{ function: goHome, text: "Home" }}
         />
         <MainForm>

            <h1><IoIosRocket /> LOGI<span>N</span></h1>
            <h2>Área Administrativa</h2>
            <input
               placeholder="Login"
               type="email"
               value={email}
               onChange={onChangeEmail}
            />

            <input
               placeholder="Senha"
               type="senha"
               value={senha}
               onChange={onChangeSenha}
            />
            <ButtonDiv>
               <button onClick={onSubmitLogin}>ENTRAR</button>
               <button onClick={() => goBack(navigate)}>VOLTAR</button>
            </ButtonDiv>
         </MainForm>
      </div>
   )
}

export default LoginPage