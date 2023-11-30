import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { ConteinerPage } from "./style/formevento";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { postSchema } from "../../Schema/postSchma";
import { useNavigate } from "react-router-dom";
import {  postEventos } from "../../services/postServices";

export  function FormEventos() {
    const {
        register: registerPost,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        // formState: { errors }
    } = useForm()

    const navigate = useNavigate()
    
    async function postHandleSubmit(data){
        try {
            const response = await postEventos(data);
            
            console.log("dados evento:"+response.data)
            navigate('/')
        } catch (error) {
            if (error.response) {
                // O pedido foi feito e o servidor respondeu com um status fora do intervalo de 2xx
                console.log("Data do erro:", error.response.data);
                console.log("Status do erro:", error.response.status);
                console.log("Cabeçalhos do erro:", error.response.headers);
              } else if (error.request) {
                // O pedido foi feito, mas ainda não recebeu resposta
                console.log("Request feito, sem resposta recebida ainda");
              } else {
                // Algo aconteceu durante a configuração do pedido que desencadeou um erro
                console.log("Erro de configuração do pedido:", error.message);
              }
        }
    }
    return(
        <ConteinerPage>
            <h2>Compartilhe seu evento</h2>
            <form onSubmit={handleSubmit(postHandleSubmit)}  encType="multipart/form-data">
                <Input
                    type={"text"}
                    placeholder={"Titulo do evento"}
                    name={"nome"}
                    register={registerPost}
                />
                 <Input
                    type={"text"}
                    placeholder={"Autor"}
                    name={"author"}
                    register={registerPost}
                />
                 <Input
                    type={"text"}
                    placeholder={"Descrição"}
                    name={"descricao"}
                    register={registerPost}
                />
                 <Input
                    type={"select"}
                    placeholder={"categoria"}
                    name={"categoria"}
                    register={registerPost}
                >
                    <option value="1">teste</option>
                </Input>
                   <Input
                    type={"text"}
                    placeholder={"localização"}
                    name={"localizacao"}
                    register={registerPost}
                />
                 <Input
                    type={"date"}
                    placeholder={"localização"}
                    name={"localizacao"}
                    register={registerPost}
                />
                 <Input
                    type={"file"}
                    placeholder={"Titulo do evento"}
                    name={"file"}
                    register={registerPost}
                />

                <button type="submit">enviar</button>
            </form>
        </ConteinerPage>
    )
}