import { useImperativeHandle, useRef, useState } from "react"

export default function StyledInput({onChange, children, ref, regex, ...props}){
    const inputRef = useRef()
    const [inputClass, setInputClass] = useState(false)
    
    useImperativeHandle(ref, () => {
        return{
            comprobar(){
                if(regex.test(inputRef.current.value)){
                    setInputClass(false)
                    return true
                }
                setInputClass(true)
                return false
            },
            value(){
                return inputRef.current.value
            }
        }
    })

    return (
        <ul style={{padding: "0px 25px"}}>
            <li>
                <label>
                    <h3 style={inputClass ? {color: "#cf310dff "} : null}>{children}</h3>
                    <input ref={inputRef} onChange={onChange} className={inputClass ? "error-input" : ""} {...props} />
                </label>
            </li>
        </ul>
    )
}