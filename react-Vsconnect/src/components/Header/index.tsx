import { Link } from "react-router-dom";
import "./style.css"
import Logo from "../../assets/img/logo.svg";

function mostrarMenu() {
    let menu = document.getElementById("menu_links") as HTMLCanvasElement;; // Obtém o elemento do menu pelo ID
    let sombra = document.getElementById("sombra") as HTMLCanvasElement;; // Obtém o elemento da sombra pelo ID
    let menu_barras = document.getElementById("menu_barras") as HTMLCanvasElement;; // Obtém o elemento do botão do menu pelo ID
     
    let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
        menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.right = "-10vw"; // Move a sombra para a direita
        menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
        menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
        body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
        menu.style.left = "-300px";
        sombra.style.right = "110vw";
        menu_barras.setAttribute("aria-expanded", "false");
        menu_barras.setAttribute("aria-label", "abrir menu");
        body.style.overflow = "auto";
    }
    menu_barras.classList.toggle("ativo");
}

function Header() {
    return (
        <header>
                <div className="container header_conteudo">

                    <a className="menu_barras" id="menu_barras" aria-label="abrir menu" aria-expanded="false" aria-controls="menu_links" aria-haspopup="true" onClick={() => mostrarMenu()} href="#"><div className="barras"></div></a>
                    <img className="header_logo" src={Logo} alt="" />
                    <nav>
                        <div id="menu_links" className="menu_links">
                        <Link to={'/'}><a href="../Home/index.html">home</a></Link>
                        <Link to={'/listaServicos'}><a href="#">serviços</a></Link>
                            <a href="../CadastroDev/index.html">cadastro</a>
                        </div>
                        <a className="header_icone_login" href="../Login/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                            </svg>
                        </a>
                        <a className="header_botao_login" href="../Login/index.html">login</a>
                    </nav>
                </div>
            </header>
    )
}

export default Header