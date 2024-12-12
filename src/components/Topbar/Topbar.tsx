import './Topbar.css';

export default function Topbar() {
    return (
        <div className="topbar">
            <p className='title'> Todas as Notas </p>

            <input
                type="text"
                name="text"
                className="input"
                placeholder="Procure por títulos, textos ou tags..."></input>
        </div>
    );
}
