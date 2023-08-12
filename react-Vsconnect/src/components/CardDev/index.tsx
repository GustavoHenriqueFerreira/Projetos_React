import "./style.css";

interface CardDevProps {
    foto: string;
    nome: string;
    email: string;
    techs: string[];
}

function CardDev({ foto, nome, email, techs }: CardDevProps) {
    return (
        <ul>
            <li>
                <div className="dev">
                    <div className="grupo_contato">
                        <img src={foto} alt="" />
                        <div className="contato_dev">
                            <h3>{nome}</h3>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div className="techs">
                        {techs.map((techs, index) => (
                            <span key={index}>{techs}</span>
                        ))}
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default CardDev;