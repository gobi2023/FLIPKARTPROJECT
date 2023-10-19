import { Container, Grid } from "@mui/material"
import { MyCard } from "../../components/cards/MyCard"
import { Mynavbar } from "../../components/navbars/Mynavbar"
import { MySlider } from "../../components/sliders/MySlider"
import { flipkartapi } from "../../api/flipkart.api"
import { CardList } from "./CardList"
export const Home:React.FC=()=>{
      console.log(flipkartapi()) 
    return <>
    <Container>
       
        <br />
        <MySlider/>
       <br />
   <CardList/>
       
      
    </Container>
    </>
}