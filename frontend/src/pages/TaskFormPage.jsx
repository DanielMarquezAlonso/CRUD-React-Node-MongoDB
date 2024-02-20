import { useForm } from 'react-hook-form';

export function TaskFormPage() {
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("name", { required: true })}
                />
                <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                />
            <button>Save</button>
            </form>
        </div>
    )
}