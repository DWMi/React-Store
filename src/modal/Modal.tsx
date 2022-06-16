import React, {CSSProperties,FC, PropsWithChildren, useEffect} from 'react'
import ReactDOM from 'react-dom';



interface Props {}

const Modal:FC<PropsWithChildren<Props>> = (props) =>{

    const ocmModal = document.createElement('div')
    ocmModal.classList.add('ocmModal')

    useEffect(() => {

        document.body.append(ocmModal)
        
        document.body.style.overflow='hidden'
        
        return ()=>{
            document.body.removeChild(ocmModal)
            document.body.style.overflow='unset'
        }
    },[])

    return ReactDOM.createPortal(props.children, ocmModal)

}

export default Modal

