import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/node/InputBase';
import { FormLabel, Button, Divider, Grid } from '@mui/material';
import Step from './Step';
import {LocationOn} from '@mui/icons-material';

const StyledInputBase = styled(InputBase)(() => ({
    background:"#FFF",
    paddingLeft:"1.2rem",
    border:"solid 1px #797979",
    borderRadius:".4rem",
    marginBottom:"1.4rem",
    width:"80%",
}));

const StyledDivider = styled(Divider)(() => ({
    alignSelf:"stretch",
    width:"100%"
}));

const StyledForm = styled("form")(() => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center", 
    textAlign:"end"
}));



export default () => {
    const [origin, setOrigin] = useState('')        
    const [destination, setDestination] = useState('')

    // the route State and the onSearch function should probably be brought ass props from MainPage or use provider
    const [route, setRoute] = useState([])

    const onSearch = async ({origin, destination}) => {
        //const res = await fetch(url?)
        // const data = await res.json()
        const data = ['left', 'left','straight','right']
        setRoute(data)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!origin){
            //can use client location as default
            alert('Please Choose Origin')
            return
        }

        if (!destination){
            alert('Please Choose Destination')
            return
        }

        onSearch({origin, destination})
        
    }

    return (
        <Grid container flexDirection='column' justifyContent='center' alignItems='flex-end'>
            <h1>
                Gaze
            </h1>
            
            <StyledForm onSubmit={onSubmit}>
                <div>
                    <FormLabel sx={{color:'#426FE2'}}>מקור</FormLabel>
                    <br />
                    <LocationOn sx={{verticalAlign:"middle"}}/>
                    <StyledInputBase
                        placeholder='תל אביב'
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </div>
                <div >
                    <FormLabel sx={{color:'#426FE2'}}>יעד</FormLabel>
                    <br />
                    <LocationOn sx={{verticalAlign:"middle"}}/>
                    <StyledInputBase
                        placeholder='המכללה למנהל'
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <br />
                <Button type='submit' variant="contained" sx={{width:"80%", alignSelf:"center"}}>חישוב מסלול</Button>
            </StyledForm>
            <br />
            <StyledDivider/>
            {
                route.length > 0 && <h3>הוראות נסיעה</h3>}
                
            { route.map((step, index) => (<Step direction={step} key={index}/>))}
            
        </Grid>
    )
}
