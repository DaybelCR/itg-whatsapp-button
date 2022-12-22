import React from "react";
import PropTypes from "prop-types";

type Props={
    logo:string
    phone:string
    message:string
    width:number
    height:number
}

const WhatsappButton=({logo,phone,message,width,height}: Props)=>{
    const formattedMessage=message.replace(/ /g,'%20')
    console.log('formated',formattedMessage)
    console.log(logo,phone,message)
    return <>
           <div className="fixed bottom-2 right-2 flex flexColumn">
           <a
             href={`https://wa.me/${phone}?text=${formattedMessage}`}
             target="_blank"
             rel="noreferrer noopener"
             >
                <img
                  src={logo}
                  width={width}
                  height={height}
                  alt="logo-whatsapp"
                />
             </a>
            </div>
            </>
}
WhatsappButton.prototype={
    logo:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    message:PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number
}
WhatsappButton.defaultProps={
    logo: "test.logo.png",
    phone: "93423568",
    message: "Hola,bienvenido a la tienda",
    width:80,
    height:80
}
WhatsappButton.schema={
    title:"Botón de Whatsapp",
    type:"object",
    properties:{
        logo:{
            title:"Logo de Whatsapp",
            type: "string",
            widget:{
                "ui:widget":"image-uploader"
            }
        },
        phone:{
            title: "Teléfono",
            description:"Agrega por favor el número de teléfono",
            type: "string",
        },
        message:{
            title: "Mensaje",
            description:"Agrega por favor el mensaje que verá el cliente",
            type: "string",
            widget:{
                "ui:widget":"textarea"
            }
        },
        width:{
            title:"width logo",
            description:"Agrega por favor el ancho del logo",
            type: "number",
        },
        height:{
            title:"height logo",
            description:"Agrega por favor la altura del logo",
            type: "number",
        }

    }
}

export default WhatsappButton;