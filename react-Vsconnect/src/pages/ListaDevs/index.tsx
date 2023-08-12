import "../ListaDevs/style.css"
import Footer from "../../components/Footer";
import CardDev from "../../components/CardDev";
import { useState } from "react";

interface Dev {
    foto: string;
    nome: string;
    email: string;
    techs: string[];
}

function ListaDevs() {
    const [devs, setDevs] = useState<Dev[]>([
        {
            foto: "https://github.com/Thiago-Nascimento.png",
            nome: "Thiago Nascimento",
            email: "thiago@email.com",
            techs: ["HTML", "CSS", "React"],
        },
        {
            foto: "https://github.com/JessicaSanto.png",
            nome: "Jessica Franzon",
            email: "jessica@email.com",
            techs: ["HTML", "CSS", "React"],
        },
        {
            foto: "https://github.com/odirlei-assis.png",
            nome: "Odirlei Sabella",
            email: "odirlei@email.com",
            techs: ["HTML", "CSS", "React"],
        },
        {
            foto: "https://github.com/alexiamelhado18.png",
            nome: "Aléxia Vitóri",
            email: "alexia@email.com",
            techs: ["HTML", "CSS", "React"],
        }
    ]);


    return (
        <>
        <main className="main_login">
            <div className="container container_lista_devs">
                <div className="lista_devs_conteudo">
                    <h1>Lista de Devs</h1>
                    <hr />
                    <form method="post">
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar desenvolvedores</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        {devs.map((dev, index) => (
                            <CardDev
                                key={index}
                                foto={dev.foto}
                                nome={dev.nome}
                                email={dev.email}
                                techs={dev.techs}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </>
    )
}

export default ListaDevs;