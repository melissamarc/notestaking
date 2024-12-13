import './Topbar.css';
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="topbar">
            <p className='title'> Todas as Notas </p>

            <button onClick={handleLogout}> Logout </button>

            <input
                type="text"
                name="text"
                className="input"
                placeholder="Procure por títulos, textos ou tags..."></input>
        </div>
    );
}
