// import { useForm } from "react-hook-form";
// import Input from "../../components/Input/Input";
import { ConteinerPage } from "./style/formevento";
import { useState } from "react";
import './style/form.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { zodResolver } from "@hookform/resolvers/zod";
// import { postSchema } from "../../Schema/postSchma";
// import { useNavigate } from "react-router-dom";
// import {  postEventos } from "../../services/postServices";

export  function FormEventos() {
    // const {
    //     register: registerPost,
    //     handleSubmit,
    //     // eslint-disable-next-line no-unused-vars
    //     // formState: { errors }
    // } = useForm()
    const [imageURL, setImageURL] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL);
      }
    };
    // const navigate = useNavigate()
    
    // async function postHandleSubmit(data){
    //     try {
    //         const response = await postEventos(data);
            
    //         console.log("dados evento:"+response.data)
    //         navigate('/')
    //     } catch (error) {
    //         if (error.response) {
    //             // O pedido foi feito e o servidor respondeu com um status fora do intervalo de 2xx
    //             console.log("Data do erro:", error.response.data);
    //             console.log("Status do erro:", error.response.status);
    //             console.log("Cabeçalhos do erro:", error.response.headers);
    //           } else if (error.request) {
    //             // O pedido foi feito, mas ainda não recebeu resposta
    //             console.log("Request feito, sem resposta recebida ainda");
    //           } else {
    //             // Algo aconteceu durante a configuração do pedido que desencadeou um erro
    //             console.log("Erro de configuração do pedido:", error.message);
    //           }
    //     }
    // }
    return(
        <ConteinerPage>
            <form>
                <div className="App">
                    <p className="com">Compartilhe seu evento</p>
                    
                    <label htmlFor="input" id="area" style={{ backgroundImage: `url(${imageURL})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                       
                       <input
                        id="input"
                        type="file"
                        onChange={handleImageChange}
                    
                        />
                        <i className="far fa-image"></i><p>Selecione uma imagem</p>
                    </label>

                    <div className="forme">
                        <div className="título">
                        <label>Título do evento</label>
                        <input type="text" name='form' placeholder="Digite o título do evento" required></input>
                        </div>

                        <div className="descricao">
                        <label>Descrição do evento</label>
                        <textarea placeholder="Digite a descrição do evento" rows="4" required></textarea>
                        </div>

                        <div className="categorias">
                        <select name="" required>
                            <option value="" disabled selected>Categoria do evento</option>
                            <optgroup label="">
                            <option className="option" value="cater">carter1</option>
                            <option className="option" value="cater">carter2</option>
                            <option className="option" value="cater">carter3</option>
                            </optgroup>
                        </select>
                        </div>

                        <div className="Local">
                        <label>Localização do evento</label>
                        <input type="text" name="Local" placeholder="Digite a localização do evento" required></input>
                        </div>

                        <div className="dates">
                        <div className="data">
                            <label>Data do evento</label>
                            <input type="date" name='data' placeholder="Digite a data do evento" required></input>
                        </div>

                        <p>Até</p>


                        <div className="data2">
                            <label>opcional</label>
                            <input type="date" name='data2' placeholder="Digite a data do evento" required></input>
                        </div>
                        </div>
                        
                        <div className='Faixa'>
                        <label>Defina a Faixa Etária</label>
                        <input type='number' name='idade'></input>
                        </div>
                        <div className='entes'>
                        <div className='orga'>
                            <label>Organizadores</label>
                            <input type='text' name='organizadores'></input>
                        </div>
                        <div className='patro'>
                            <label>Patrocinadores(opcional)</label>
                            <input type='text' name='patrocinadores'></input>
                        </div>
                        </div>

                        <div className="bot">
                        <button className="botao">Publicar</button>
                        </div>
                    </div>
                
                </div>
            </form>
        </ConteinerPage>
    )
    // <h2>Compartilhe seu evento</h2>
    // <form onSubmit={handleSubmit(postHandleSubmit)}  encType="multipart/form-data">
    //     <Input
    //         type={"text"}
    //         placeholder={"Titulo do evento"}
    //         name={"nome"}
    //         register={registerPost}
    //     />
    //      <Input
    //         type={"text"}
    //         placeholder={"Autor"}
    //         name={"author"}
    //         register={registerPost}
    //     />
    //      <Input
    //         type={"text"}
    //         placeholder={"Descrição"}
    //         name={"descricao"}
    //         register={registerPost}
    //     />
    //      <Input
    //         type={"select"}
    //         placeholder={"categoria"}
    //         name={"categoria"}
    //         register={registerPost}
    //     >
    //         <option value="1">teste</option>
    //     </Input>
    //        <Input
    //         type={"text"}
    //         placeholder={"localização"}
    //         name={"localizacao"}
    //         register={registerPost}
    //     />
    //      <Input
    //         type={"date"}
    //         placeholder={"localização"}
    //         name={"localizacao"}
    //         register={registerPost}
    //     />
        //  <Input
        //     type={"file"}
        //     placeholder={"Titulo do evento"}
        //     name={"file"}
        //     register={registerPost}
        // />

    //     <button type="submit">enviar</button>
    // </form>
}