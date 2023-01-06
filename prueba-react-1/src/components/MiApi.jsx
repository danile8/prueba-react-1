import { useEffect, useState } from "react";

const MiApi = () => {

const [result, setResult] = useState([]);

useEffect(() => {
    getData();
}, []);

const getData = async() => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setResult(data)
    console.log(data);
    };
    



    return(
        <>
        <h3>Consumiendo una api de paises con react</h3>
        <ul>
            {result.map(item => {
                <li key={item.code}>{item.name.common}</li>
            })
        }
        </ul>
        </>
    )
}
export default MiApi;