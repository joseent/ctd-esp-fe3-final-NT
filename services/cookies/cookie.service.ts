export const setCookies = async (): Promise<any> => {
    console.log("in setCokkies");
    
    const response = await fetch(`/api/cookies`, {
        method: 'POST',
      });
    console.log('response', response)
    // return await response.json();

};


