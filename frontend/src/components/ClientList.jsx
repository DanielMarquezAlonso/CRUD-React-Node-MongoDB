import { useEffect, useState } from "react"
import { getAllClients } from "../api/client.api"
import { ClientCard } from "./ClientCard"

export function ClientList() {
    
    const [Clients, setClients] = useState([])

    useEffect(() => {
        console.log('Pagina cargada')
        async function loadClients() {
            const res = await getAllClients()
            console.log(res.data)
            setClients(res.data)
        }
        loadClients()
    }, [])
    return (
        <div>
        <div>
            Client List
        </div>
        {Clients.map(client => (
            <ClientCard key={client._id} client={client} />
        ))}
        </div>
    )
}