import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/clients">
                <h1>Client App</h1>
            </Link>
            <Link to="/clients-create">Create client</Link>
        </div>
    )
}