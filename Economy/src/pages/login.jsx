import { Helmet } from "react-helmet";
import css from "../Css/login.module.css"
import { Link } from "react-router-dom";
import Menu from "../components/menu"
import Footer from "../components/footer";
export default function Login(){
    return(
        <>
        <Menu ativo=""/>
        <div>
  <div className="container">
    <div className="row ">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div
          className={`card border-0 shadow rounded-3 my-5 bg-dark text-white ${css.bordinha}`}
          
        >
          <div className="card-body p-4 p-sm-5">
            <h1
              className={`card-title text-center mb-5 fw-light fs-5 ${css.palavralogin}`}
            >
              <span className={`${css.verde}`}>Lo</span>
              <span className={`${css.Branco}`}>gin</span>
            </h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <span className={`${css.verde}`} style={{ fontSize: "20px !important" }}>
                    Endereço
                  </span>
                  <span className={`${css.Branco}`} style={{ fontSize: "20px !important" }}>
                    {" "}
                    de email:
                  </span>
                </label>
                <input
                  type="email"
                  className={`form-control ${css.exampleInputEmail1}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o seu email..."
                />
              </div>
              <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <span className={`${css.verde}`} style={{ fontSize: "20px !important" }}>
                    Sen
                  </span>
                  <span className={`${css.Branco}`} style={{ fontSize: "20px !important" }}>
                    ha:
                  </span>
                </label>
                <input
                  type="password"
                  className={`form-control ${css.exampleInputEmail1}`}
                  id="exampleInputPassword1"
                  placeholder="Digite a sua senha..."
                />
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-secondary btn-login text-uppercase fw-bold"
                  style={{ maxWidth: 395 }}
                  type="submit"
                >
                  Entrar
                </button>
              </div>
              <hr className="my-4" />
              <div className="d-grid mb-2">
                <Link to='/cadastro'>
                  <h5 className={`${css.linknao}`}>Não tem uma conta? Cadastre-se aqui!</h5>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>

        </>
    )}