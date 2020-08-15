import React from 'react'


const InputFd=React.forwardRef((props,ref)=>{
 return(
     <div>
         <input type="text" ref={ref}></input>     
         </div>
 )
})
export default InputFd
