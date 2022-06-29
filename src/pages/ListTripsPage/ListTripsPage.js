import * as React from "react"
import { useNavigate } from "react-router-dom"
import { goToApplicationForm, goHome, goToLoignPage } from "../../routes/Coordinator"
import { BASE_URL } from "../../constants/Base_url"
import { useRequestData } from "../../hooks/useRequestData"
import { Lista, CardName, Div } from "./styled";
import Card from "@mui/material/Card";
import { Header } from '../../components/Header/Header'
import { IoMdPlanet } from "react-icons/io"

const ListTripsPage = () => {

   const navigate = useNavigate()
   const listTrip = useRequestData(`${BASE_URL}/trips`, {})


   const trips =
      listTrip.trips &&
      listTrip.trips.map((trip) => {
         return (

            <div key={trip.id}>
               <Card className="DivCard" color='primary' sx={{ minWidth: 275 }}>

                  <CardName> <IoMdPlanet /> {trip.planet}</CardName>
                  <Div>
                     <p className="top-top">Nome: {trip.name}</p>
                     <p className="top">Descrição: {trip.description}</p>
                     <p className="top1"> Duração: {trip.durationInDays} dias</p>
                     <p className="top2"> Data: {trip.date}</p>
                     <button className="button" onClick={() => goToApplicationForm(navigate, trip.id)}>
                        Inscrever-se
                     </button>
                  </Div>
               </Card>
            </div>
         );
      })

   return (
      <div>
         <Header
            first={{ function: goHome, text: "Home", }}
            second={{ function: goToLoignPage, text: "Login", }}
         />
         <Lista>{trips}</Lista>

      </div>
   )
}

export default ListTripsPage