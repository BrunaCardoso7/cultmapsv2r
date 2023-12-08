import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { ConteinerPage } from "./style/formevento";
import { useState } from "react";

import './style/form.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
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
    const [imageURL, setImageURL] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.file[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL);
      }
    };
    
    const navigate = useNavigate()
    
    async function postHandleSubmit(data){
        try {
            const response = await postEventos(data);
            
            console.log("dados evento:"+response.data)
            navigate('/')
        } catch (error) {
            if (error.response) {
  
                console.log("Data do erro:", error.response.data);
                console.log("Status do erro:", error.response.status);
                console.log("Cabeçalhos do erro:", error.response.headers);
              } else if (error.request) {

                console.log("Request feito, sem resposta recebida ainda");
              } else {

                console.log("Erro de configuração do pedido:", error.message);
              }
        }
    }
    return(
        <ConteinerPage>
            <form onSubmit={handleSubmit(postHandleSubmit)}>
                <div className="App">
                    <p className="com">Compartilhe seu evento</p>
                    
                    <label htmlFor="input" id="area" style={{ backgroundImage: `url(${imageURL})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                       
                       <input
                        id="input"
                        type="file"
                        onChange={handleImageChange}
                            {...registerPost("file")}
                        />
                        <i className="far fa-image"></i><p>Selecione uma imagem</p>
                    </label>

                    <div className="forme">
                        <div className="título">
                        <label>Título do evento</label>
                        <Input
                            type={"text"}
                            placeholder={"nome do evento"}
                            name={"nome"}
                            register={registerPost}
                        />
                
                        </div>

                        <div className="descricao">
                        <label>Descrição do evento</label>
                        
                        <textarea placeholder="Digite a descrição do evento" {...registerPost("descricao")} rows="4" required></textarea>
                        </div>

                        <div className="categorias" style={{border: "none"}}>
                        <select name="categoria" {...registerPost("categoria")} required>
                            <option value="none" disabled>Categoria do evento</option>
                            <optgroup label="categoria do evento">
                            <option className="option" value="Tecnologia Games e Geeks">Tecnologia Games e Geeks</option>
                            <option className="option" value="Festas e Shows">Festas e Shows</option>
                            <option className="option" value="Artes Cinema e Lazer">Artes Cinema e Lazer</option>
                            <option className="option" value="Infantil">Infantil</option>
                            <option className="option" value="Pride">Pride</option>
                            <option className="option" value="Esporte">Esporte</option>
                            <option className="option" value="Cursos e Workshops">Cursos e Workshops</option>
                            <option className="option" value="Congresso e palestras">Congresso e palestras</option>
                            <option className="option" value="Saúde e Bem-estar">Saúde e Bem-estar</option>
                            <option className="option" value="Moda e Beleza">Moda e Beleza</option>
                            </optgroup>
                        </select>
                        </div>

                        <div className="Local">
                        <label>Localização do evento</label>
                        <Input
                            type={"text"}
                            placeholder={"Local do evento"}
                            name={"localizacao"}
                            register={registerPost}
                         />
                        </div>

                        <div className="dates">
                        <div className="data">
                            <label>Data do evento</label>
                            <Input
                                type={"date"}
                                name={"data"}
                                placeholder={"Digite a data do evento"}
                                register={registerPost}
                            />
                        </div>

                        <p>Até</p>


                        <div className="data">
                            <label>opcional</label>
                            <Input
                                type={"date"}
                                name={"dataOpt"}
                                placeholder={"Digite a data do evento"}
                                register={registerPost}
                            />
                        </div>
                        </div>
                        
                        <div className='Faixa'>
                        <label>Defina a Faixa Etária</label>
                        <input type='number' name='idade' {...registerPost("idade")}></input>
                        </div>
                        <div className='entes'>
                            <div className='orga'>
                                <label>Organizadores</label>
                                <Input
                                    type={"text"}
                                    name={"organizadores"}
                                    register={registerPost}
                                />
                            </div>
                            <div className='orga'>
                                <label>Patrocinadores(opcional)</label>
                                <Input
                                    type={"text"}
                                    name={"patrocinadores"}
                                    register={registerPost}
                                />
                            </div>
                        </div>

                        <div className="bot">
                        <button type="submit" className="botao">Publicar</button>
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