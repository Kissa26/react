import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Info = () => {
    return <>
   <Box bgcolor={"primary.main"}> 
<div style={{width: '300' , height: '300'  }}>
<h1> hihi</h1>
</div>

<TextField id="standard-basic" label="Name" variant="standard" />
<Button variant=" Let's get started ">Outlined</Button>

</Box>
</>;
 
};

export default  Info;