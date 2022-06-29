import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLoignPage } from '../../routes/Coordinator'
import { Header } from '../../components/Header/Header'
import { Main } from './styled'
import { IoIosRocket } from "react-icons/io"

const HomePage = () => {

   const navigate = useNavigate()

   return (
      <div>
         <Header
            first={{ function: goToListTrip, text: "Viagens", }}
            second={{ function: goToLoignPage, text: "Login", }}
         />
         <Main>
            <IoIosRocket />

            <h1>Labe<span>X</span> Viagens</h1>
            <h2>Seja bem-vind<span>x</span> a melhor agência de viagem espacial do mundo! </h2>
            <p>Realize o seu sonho de conhecer o desconhecido, vá ao espaço com Labe<span>X</span>, nós te levamos na velocidade da luz.</p>
            <button onClick={() => goToListTrip(navigate)}>ENTRAR</button>

         </Main>
      </div>
   )
}

export default HomePage