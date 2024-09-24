// import { useEffect, useRef } from "react";

import { useEffect, useRef } from "react";


// export function useOutsideClick(handler){
//     const ref = useRef()
//     useEffect( function(){

//         function handleClick(e){
            
//             if(ref.current && !ref.current.contains(e.target)){
//                 handler()
//             }
            
//             document.addEventListener('click',handleClick,true);
//             return ()=>document.addEventListener("click",handleClick,true)
//         }
//     },[])
// }

export function useOutsideClick(handler,listenCapturing=true){
    const ref = useRef()

    useEffect(function(){
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)){
                handler()
            }
        }
        document.addEventListener('click', handleClick,listenCapturing)

        return document.addEventListener('click',handleClick,listenCapturing)

    },[])
    return {ref}
}