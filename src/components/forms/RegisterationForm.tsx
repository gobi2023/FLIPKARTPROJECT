import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import {useNavigate} from 'react-router-dom'
export const RegisterationForm:React.FC=()=>{
    let navigate=useNavigate()
    return <>
    <Formik
       initialValues={{ email: '',name:'', password: '' }}
       validate={values => {
        interface Ierrors{
          email?:string
        }
         const errors:Ierrors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           navigate('/project/login')
           setSubmitting(false);
         }, 400);
       }}
     >
{({handleSubmit, handleChange,values})=>{return <>
  <form onSubmit={handleSubmit}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>REGISTER</h1>
<TextField
 style={{marginBottom:'20PX'}} 
id="outlined-basic" 
label="name" 
variant="outlined" 
type="text"
 name="name"
 value={values.name}
 onChange={handleChange}
/>


<TextField
  style={{marginBottom:'20PX'}}
   id="outlined-basic"
    label="email"
     variant="outlined"
     type="email"
 name="email"
 value={values.email}
 onChange={handleChange}
      />
<TextField
  style={{marginBottom:'20PX'}}
   id="outlined-basic"
    label="password" 
    variant="outlined"
    type="password"
    name="password"
    value={values.password}
    onChange={handleChange}
    />
<Button type="submit" variant="contained" color="success">
  Submit.
</Button>
</Grid>
</form>

</>}}

     </Formik>
    </>
}