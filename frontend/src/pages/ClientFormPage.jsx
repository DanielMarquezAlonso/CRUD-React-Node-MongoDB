import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createClient, deleteClient, updateClient, getClient } from '../api/client.api';
import { useNavigate, useParams } from 'react-router-dom';

export function ClientFormPage() {
    const { register, handleSubmit, formState: { errors}, setValue } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateClient(params.id, data)
        } else {
            await createClient(data)
        }
        navigate("/clients")

    })

    useEffect(() => {
        async function loadClient(){
            if (params.id) {
                const res = await getClient(params.id)
                setValue('name', res.data.name)
                setValue('lastname', res.data.lastname)
                setValue('email', res.data.email)
                setValue('address.postal', res.data.address.postal)
                setValue('address.province', res.data.address.province)
                setValue('address.locality', res.data.address.locality)

            }
        }
        loadClient()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>Name required</span>}
                <input
                    type="text"
                    placeholder="Lastname"
                    {...register("lastname")}
                />
                <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                />
                 {errors.email && errors.email.type === 'required' && <span>Email required</span>}
                {errors.email && errors.email.type === 'unique' && <span>Email repetido</span>}

                <input
                    type="text"
                    placeholder="Postal"
                    {...register("address.postal", { required: true })}
                />
                {errors.postal && <span>Postal required</span>}
                <input
                    type="text"
                    placeholder="Province"
                    {...register("address.province", { required: true })}
                />
                {errors.province && <span>Province required</span>}
                <input
                    type="text"
                    placeholder="Locality"
                    {...register("address.locality")}
                />
                <button>Save</button>
            </form>

            {params.id && <button onClick={async () => {
                const accepted = window.confirm(`Estas seguro de eliminar a ${params.id}?`)
                if (accepted) {
                    await deleteClient(params.id)
                    navigate("/clients")
                }
            }

            }>Delete</button>}
        </div>
    )
}