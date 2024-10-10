import axios, { Axios } from "axios";
import { useState } from "react";
import { Await } from "react-router-dom";

export default function useEnviar(aoReceber) {
    const basePath = "http://localhost:8080/"
    const [carregando, setCarregando] = useState(false);

    return {
        requisitar: async (url, data) => {
            const userJson = localStorage.getItem("user");
            const user = JSON.parse(userJson || '{}');
            const email = user.email
            setCarregando(true)
            const requisicao = await axios.post(basePath + url, data, {
                headers: {
                    "Content-typ": "application/json",
                    "logado": email
                }
            })
    console.log(requisicao.data)
    aoReceber(requisicao.data)
        setCarregando(false)
    return requisicao.data
        },
    }
}