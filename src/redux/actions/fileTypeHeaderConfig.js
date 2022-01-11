

const headerConfig=()=>{
    const userInfoFromStorage =  JSON.parse(localStorage.getItem("authToken"));
    const {token}=userInfoFromStorage;

    const config={headers:{ 'content-type' :'multipart/form-data',
                            'authorization' : `Bearer ${token}` } }

    return config;
}

export default headerConfig;