/* eslint-disable react/prop-types */
import {InputSpace} from './style/input.js'
export default function Input({type, placeholder, register,name}) {
    return(
        <InputSpace type={type} placeholder={placeholder} {...register(name)} />
    )
}
// export function TextArea({ placeholder, register, name}){
//     return(
//         <TextArea placeholder={placeholder}{...register(name)}></TextArea>
//     )
// }