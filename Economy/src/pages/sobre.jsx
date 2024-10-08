import { Helmet } from "react-helmet";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Css from "../Css/sobre.module.css"
import Logo from "../assets/Imagens/Menu/Econo.png"
import FOOOTER from "../components/footer"
import Menu from "../components/menu";

export default function Sobre(){
    return(
        <>
                <Helmet><title>Sobre Nós</title></Helmet>
            <Menu ativo={"Sobre"}/>
  <section  

    className={`${Css.py-5}  py-5 text-left ${Css.caixatexto} mb-5 ${Css.about } ${Css.descesafada}`}
    style={{ left: "0% !important" }}
  >
    <div className={`container ${Css.container}`}>
      <div className="row" style={{ textAlign: "center" }}>
        <h1 className="palavraEmpresa card-title text-center fw-light fs-5">
          <span className={Css.verde}>Sobre nossa</span>
          <span className={Css.branco}> Empresa</span>
        </h1>
        <p className={`${Css.lead} ${Css.texto_sobre}`}>
          Bem-vindo à nossa comunidade dedicada à preservação natural e à
          proteção do nosso precioso planeta. Somos uma organização não
          governamental apaixonada por fazer a diferença, inspirando mudanças
          positivas e promovendo a conservação ambiental em todo o mundo.
        </p>
        <div className={Css.Centralimage}>
          <img src={Logo} />
        </div>
      </div>
    </div>
  </section>                                  
  <section                             
    
    className={`py-5 text-left caixatexto ${Css.py-5} ${Css.caixatexto} ${Css.about}`}
    style={{ right: "0%", position: "absolute", textAlign: "center" }}
  >
    <div className={`container ${Css.container}`}> 
    <div className="row">
        <h1 className={` ${Css.palavraEmpresa} card-title  text-center  fw-light fs-5`}>
          <span className={Css.verde}>Nossa missão é sim</span>
          <span className={Css.branco}>ples, mas poderosa:</span>{" "}
        </h1>
        <p className={`${Css.lead} ${Css.texto_sobre}`}>
          <br />
          Proteger e preservar a beleza e a diversidade da natureza para as
          gerações presentes e futuras. Acreditamos firmemente que cada ação,
          por menor que seja, pode contribuir para um impacto positivo no meio
          ambiente. É por isso que nos esforçamos para engajar comunidades,
          mobilizar recursos e implementar soluções práticas que promovam a
          sustentabilidade e a harmonia entre a humanidade e a natureza.
        </p>
      </div>
    </div>
  </section>
<FOOOTER className={`${Css.sobesafada}`} />

        </>
    )}