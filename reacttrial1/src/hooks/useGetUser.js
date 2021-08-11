import { useState, useEffect } from 'react';

export default function useGetUser(){
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    function getUser(){
      fetch(
        "https://flpnmoyvhe.execute-api.us-east-1.amazonaws.com/platformTesting/cookiecheck", {
          method: "POST",
          credentials: "include",
          mode:"cors",
          body: JSON.stringify(null),
          headers:{}
      })
      .then(serverResponse => serverResponse.json())
      .then(parsedData => {
        console.log("Fetch API in useGetUser Hook reached Lambda in Gateway and returned this response: ", parsedData);
        setUser({...parsedData});
        setLoading(false);
      })
      .catch(error => {
        console.log("Fetch API in useGetUser Hook failed and returned this error:", error);
        setLoading(false);
      });
    }
    getUser();

  }, []);
  return({
    user,
    setUser,
    isLoading
  });
}
