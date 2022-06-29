import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, logout, goHome } from "../../routes/Coordinator"
import { useProtectedPage } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL } from "../../constants/Base_url"
import { PLANETAS } from "../../constants/Planetas"
import { Header } from '../../components/Header/Header'
import { MainForm, ButtonDiv } from "./styled"
import { IoIosRocket } from "react-icons/io"


const CreateTripPage = () => {

   useProtectedPage()
   const navigate = useNavigate()
   const { form, handleChange, cleanFields } = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
   })

   const createTrip = (event) => {
      event.preventDefault();
      const HEADER = {
         headers: {
            auth: localStorage.getItem("token"),
         },
      };
      axios
         .post(`${BASE_URL}/trips`, form, HEADER)
         .then((response) => {
            alert("Viagem criado com sucesso!");
            cleanFields()
         })
         .catch((error) => {
            alert("Houve um problema, tente novamente!")
         })
   }

   const listPlanetas = PLANETAS.map((planeta) => {
      return (
         <option key={planeta} value={planeta}>
            {planeta}
         </option>
      );
   });

   return (

      <div>
         <Header
            first={{ function: goHome, text: "Home" }}
            second={{ function: logout, text: "Logout" }}
         />

         <MainForm>
            <form onSubmit={createTrip}>

               <h2><IoIosRocket /> Crie Uma Nova Viagem</h2>
               <input
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                  placeholder={"Nome"}
                  required
                  pattern={"^.{5,}"}
                  title={"O nome deve ter no mínimo 5 letras"}
               />
               <select
                  value={form.planet}
                  name="planet"
                  onChange={handleChange}
                  required
               >
                  <option value="">Selec. o planeta</option>
                  {listPlanetas}
               </select>
               <input
                  value={form.date}
                  name="date"
                  onChange={handleChange}
                  placeholder={"date"}
                  required
                  type="date"
               />
               <input
                  value={form.description}
                  name="description"
                  onChange={handleChange}
                  placeholder={"Descrição"}
                  required
                  pattern={"^.{30,}"}
                  title={"A descrição deve ter no mínimo  30 caracteres"}
               />
               <input
                  value={form.durationInDays}
                  name="durationInDays"
                  onChange={handleChange}
                  placeholder={"Duração da Viagem em dias"}
                  required
                  type="number"
                  min={50}
               />
               <ButtonDiv>
                  <button onClick={() => goBack(navigate)}>VOLTAR</button>
                  <button>CRIAR</button>
               </ButtonDiv>
            </form>
         </MainForm>
      </div>
   )
}

export default CreateTripPage