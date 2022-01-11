import React from "react";
import ContentHeader from "./ContentHeader";
import {useLocation} from "react-router-dom";


function ProfileDetails(){
    const location = useLocation();

    return(

        <>
        
       <ContentHeader path={location.pathname}/>

        </>
     )

}

export default ProfileDetails;