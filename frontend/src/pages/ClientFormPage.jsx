import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createClient, deleteClient, updateClient, getClient } from '../api/client.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function ClientFormPage() {
    const { register, handleSubmit, formState: { errors}, setValue, setError } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        try{

            if (params.id) {
                await updateClient(params.id, data)
                toast.success('Client updated')

            } else {
                await createClient(data)
                toast.success('Client created')
            }
            navigate("/clients")
        } catch (error) {
            if (error.response && error.response.data) {
                if (error.response.data.error === 'This email is registered') {
                    setError('email', { type: 'manual', message: 'This email is already registered' });
                }
            }
        } 
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
        <div className="max-w-xl">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("name", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.name && <span>Name required</span>}
                <input
                    type="text"
                    placeholder="Lastname"
                    {...register("lastname")}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                />
                <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    disabled={!!params.id} 
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                />
                {errors.email && <span>{errors.email.message}</span>}
                {errors.email && <span>Email Required</span>}

                <input
                    type="text"
                    placeholder="Postal"
                    {...register("address.postal", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                />
                {errors.postal && <span>Postal required</span>}
                <input
                    type="text"
                    placeholder="Province"
                    {...register("address.province", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                />
                {errors.province && <span>Province required</span>}
                <input
                    type="text"
                    placeholder="Locality"
                    {...register("address.locality")}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                />
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
            </form>

            
           {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm(`Estas seguro de eliminar a ${params.id}?`);
              if (accepted) {
                await deleteClient(params.id);
                toast.success('Client deleted')
                navigate("/clients");
              }
            }}
          >
            delete
          </button>
        </div>
      )}
        </div>
    )
}