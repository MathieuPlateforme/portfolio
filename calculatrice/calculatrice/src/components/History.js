import { useState, useEffect } from "react"

function History(props)
{
    const [dataStatus, setDataStatus] = useState("Loading ...")
    useEffect(() => {
        async function loadData()  {
            var rawData = await fetch('http://localhost/sites/calculatrice/calculatrice/src/db.php', {
                method: "POST",
                headers: {'Content-type': 'application/x-www-form-urlencoded'},
                body: ''
            });
            var response = await rawData.json();
            setDataStatus("test: "+response[0].calcule+"...")
        }
        loadData();
    }, [])

    return (<h1>{dataStatus}</h1>)
}

export default History