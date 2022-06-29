import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goToLoignPage, goHome } from "../../routes/Coordinator"
import { MainForm, ButtonDiv } from "./styled"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/Base_url"
import { PAISES } from "../../constants/Paises"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { Header } from '../../components/Header/Header'
import { IoIosRocket } from "react-icons/io"

const ApplicationFormPage = () => {

   const navigate = useNavigate()
   const params = useParams()
   const getTrips = useRequestData(`${BASE_URL}/trips`, {});
   const { form, handleChange, cleanFields } = useForm({
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
   })

   const tripSelected =
      getTrips.trips &&
      getTrips.trips
         .filter((viagem) => {
            return viagem.id === params.id;
         })
         .map((viagem) => {
            return viagem.name;
         });

   const enviar = (event) => {
      event.preventDefault();
      axios
         .post(`${BASE_URL}/trips/${params.id}/apply`, form)
         .then((response) => {
            cleanFields();
         })
         .catch((error) => {
            alert(error.response);
         });
   };

   //faz um map no array de paises recebido de constants
   const listPais = PAISES.map((pais) => {
      return (
         <option key={pais.ordem} value={pais.nome}>
            {pais.nome}
         </option>
      );
   });

   return (
      <div>
         <Header
            first={{ function: goHome, text: "Inicio" }}
            second={{ function: goToLoignPage, text: "Login" }}
         />
         <MainForm>
            <h1><IoIosRocket /> Venha se Inscrever :)</h1>
            <div>
               <form onSubmit={enviar}>
                  <h2>Viagem Selecionada </h2>
                  <h2><span>{tripSelected}</span></h2>
                  <input
                     value={form.name}
                     name="name"
                     onChange={handleChange}
                     placeholder={"Nome"}
                     required
                     pattern={"^.{3,}"}
                     title={"O nome deve ter no mínimo 3 letras"}
                  />
                  <input
                     value={form.age}
                     name="age"
                     onChange={handleChange}
                     placeholder={"Idade"}
                     required
                     type="number"
                     min={18}
                  />
                  <input
                     value={form.profession}
                     name="profession"
                     onChange={handleChange}
                     placeholder={"Profissão"}
                     required
                     pattern={"^.{10,}"}
                     title={"A profissão deve ter no mínimo  10 caracteres"}
                  />
                  <select
                     value={form.country}
                     name="country"
                     onChange={handleChange}
                     required
                  >
                     <option value="">Selecione um país</option>
                     {listPais}
                  </select>
                  <input
                     value={form.applicationText}
                     name="applicationText"
                     onChange={handleChange}
                     placeholder={"Texto Candidatura"}
                     required
                     pattern={"^.{30,}"}
                     title={"A candidatura deve ter no mínimo  30 caracteres"}
                  />
                  <ButtonDiv>
                     <button>ENVIAR</button>
                     <button onClick={() => goBack(navigate)}>VOLTAR</button>
                  </ButtonDiv>
               </form>
            </div>
         </MainForm>
      </div>
   )
}

export default ApplicationFormPage