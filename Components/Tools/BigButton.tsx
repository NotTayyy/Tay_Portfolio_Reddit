import React from "react";

function  Button({...props}:any) {
  
  let classNames ='border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold mx-1 ' 
  props.inverted ? classNames += 'text-gray-300 hover:bg-gray-600 ' : classNames += 'bg-gray-300 text-reddit-Dark hover:bg-gray-400 '
  return (
    <button {...props} className={classNames + props.className}/>
  )
}
export default Button;
