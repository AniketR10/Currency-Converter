import {useEffect, useState} from "react";

function useCurrencyInfo(currency){
    const [data,setData]   = useState({});

    function getCurrentDate(){
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() =>{
        const fetchCurrData = async () =>{
            try{
                const latestDate = getCurrentDate();
                const response = await fetch(
                    `https://${latestDate}.currency-api.pages.dev/v1/currencies/${currency}.json`
                );
                const result = await response.json();
                setData(result[currency]);
            } catch(error){
                console.log("Error fetching currency data :", error);
            }
        };

        fetchCurrData();

    },[currency])

    return data
}

export default useCurrencyInfo;

//designing our own hook