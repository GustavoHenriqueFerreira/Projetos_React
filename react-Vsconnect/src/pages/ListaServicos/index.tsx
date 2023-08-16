import "./style.css";
import Footer from "../../components/Footer";
import { useState } from "react";
import CardServico from "../../components/CardServico";

interface Servico {
    titulo: string;
    proposta: number;
    descricao: string;
    techs: string[];
}

function ListaServicos() {
    const [servicos] = useState<Servico[]>([
        {
          titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
          descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
          proposta: 1300,
          techs: [
            "HTML",
            "CSS",
            "REACT"
          ]
        },
        {
          titulo: "Bot telegram Pagamento",
          descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
          proposta: 2400,
          techs: [
            "PYTHON"
          ]
        },
        {
          titulo: "Caixa Rápido",
          descricao: "Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
          proposta: 1200,
          techs: [
            "PYTHON"
          ]
        }
      ]);

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servicos);
    const [techDigitada, setTechDigitada] = useState<string>("");

    function verificarCampoTech(event: any) {
        if (event.target.value === "") {
            setListaServicosFiltrados(servicos);
        }
        setTechDigitada(event.target.value);
    }

    function buscarDevPorTech(event: any) {
        event.preventDefault();

        const devsFiltrados = servicos.filter((dev: any) => dev.techs.includes(techDigitada.toLocaleUpperCase()));

        if (devsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            setListaServicosFiltrados(devsFiltrados);
        }
    }

    return (
        <>
            <main className="main_lista_servicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1 className="titulo">Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorTech}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" onChange={verificarCampoTech} name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {listaServicosFiltrados.map((servico, index) => (
                                    <CardServico
                                        key={index}
                                        titulo={servico.titulo}
                                        proposta={servico.proposta}
                                        descricao={servico.descricao}
                                        techs={servico.techs}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ListaServicos