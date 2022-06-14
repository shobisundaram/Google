export const refreshTokenSetup=(res:any)=>{
    
    const refreshToken=async()=>{
        const newAuthRes=await res.reloadAuthResponse();
        console.log('newAuthRes:',newAuthRes);
        console.log('new auth Token',newAuthRes.id_token);

    };

};