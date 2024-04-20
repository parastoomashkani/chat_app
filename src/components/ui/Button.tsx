import { cva , VariantProps } from 'class-variance-authority'
import React,{FC} from 'react'
interface Bottonprops {

}
 const bouttonVariants = cva(
  'active:scale-95 inline-flex item-center justify-center rounded-md text-sm  font-medium transition-color focuse:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none'
  ,
  {
    variants:{
      variant:{
              default:'bg-slate-900 text-white hover:bg-slate-900',
      ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200'
      }  ,
      
      size:{
      default:'h-10 py-2 px-4',
      sm:'h-11 px-8',
      lg:'h-11 px-8',


    }
    },
defaultVariants:{
  variant:'default',
  size:'default',
},
  }
 )

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof bouttonVariants>{
    isLoading?:boolean
  }


const Button :FC <ButtonProps>= ({})=> {
  return (
    <div> Button</div>
  )
}

export default Button