import { useNavigate } from "react-router-dom";

export function ClientCard({client}){
    const navigate = useNavigate()

    return (
        <div className="bg-zic-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate(`/clients-create/${client._id}`)
            }}
        >
            <h4>{client.name}</h4>
            <p>{client.lastname}</p>
            <p>{client.email}</p>
            <p>{client.address.postal}</p>
            <p>{client.address.province}</p>
            <p>{client.address.locality}</p>
            <hr/>
        </div>
    )
}