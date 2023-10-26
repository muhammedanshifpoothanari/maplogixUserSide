import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'


const layout = (props: {
    children: React.ReactNode
  }) => {
    return(
       <>  
          {props.children}
       </>
    )
}

export default layout;