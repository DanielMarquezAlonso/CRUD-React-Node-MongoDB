import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/clients">
                <h1 className="font-bold text-3xl mb-4">Client App</h1>
            </Link>
            <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">
                <Link to="/clients-create">Create client</Link>
            </button>
        </div>
    )
}