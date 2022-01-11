import React, { useState } from 'react'

import { Box,Paper,Typography} from "@material-ui/core";


function ContentHeader({path}){
        
const exactPath = path.replace("/"," ");

return(


<>
<Paper component={Box}   m={1} p={2}>

        <Typography variant="h6">
         {exactPath}
        </Typography>

      
</Paper>



</>


);

}
export default  ContentHeader;