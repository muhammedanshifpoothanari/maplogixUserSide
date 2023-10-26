import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'
const {
    Menubar
} = require('../../components/ui/menubar.tsx')

const layout = (props: {
    children: React.ReactNode
    header: React.ReactNode
    body: React.ReactNode
  }) => {
    return(
       <>  
         {props.header}
         {props.body}
         {props.children}
       </>
    )
}

export default layout;