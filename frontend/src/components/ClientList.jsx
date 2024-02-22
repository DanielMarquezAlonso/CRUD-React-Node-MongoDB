import { useEffect, useState } from "react"
import { getAllClients, getClient } from "../api/client.api"
import { ClientCard } from "./ClientCard"
import { useParams } from 'react-router-dom';



export function ClientList() {
    
    const [clients, setClients] = useState([])
    const [filterName, setFilterName] = useState("");
    const params = useParams()


    useEffect(() => {
        async function loadClients() {
            if (params.id) {
                const res = await getClient(params.id)
                setClients([res.data])

            } else if (filterName) {
                const res = await getAllClients();
                let filteredClients = res.data;
                filteredClients = res.data.filter(client => 
                    client.name.toLowerCase().includes(filterName.toLowerCase())
                );
                setClients(filteredClients);
            } else {
                const res = await getAllClients();
                setClients(res.data);
            }
            //const res = await getAllClients()
            //setClients(res.data)
        }
        loadClients()
    }, [params.id, filterName])

    const handleFilterChange = (event) => {
        setFilterName(event.target.value);
      };
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="filterInput" className="block text-sm color-black font-medium text-gray-700">
                Filter by Name:
                </label>
                <input
                type="text"
                id="filterInput"
                className="text-black mt-1 p-2 border rounded-md w-full bg-gray-100"
                value={filterName}
                onChange={handleFilterChange}
            />
            </div>
            <div className="grid grid-cols-3 gap-3">
                {clients.map(client => (
                    <ClientCard key={client._id} client={client} />
                ))}
            </div>
        </div>
    )
}