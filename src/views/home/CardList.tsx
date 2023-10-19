import { Grid } from "@mui/material"
import { MyCard } from "../../components/cards/MyCard"
import { useEffect, useState } from "react"
import { flipkartapi } from "../../api/flipkart.api"
import  img  from '../../static/images/1.jpg'
export const CardList: React.FC = () => {
 let [pro,setPro]=useState<any>();
 useEffect(()=>{

    (async()=>{
        let data= await flipkartapi()
        setPro(data)
        })()

 },[]);

    return <>
    
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
<MyCard img={img} />
{
   pro?.map((item:any)=>{
return <MyCard img={item.image} />
   })
}
        </Grid>

    </>
}