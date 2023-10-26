import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'

const layout = (props: {
    children: React.ReactNode
    sideBar: React.ReactNode
    content: React.ReactNode
    footer: React.ReactNode
  }) => {
    return(
        <div className='border-t'>
           <div className='grid grid-cols-12 h-full'>
             {props.sideBar}
             {props.content}
             {props.footer}
             {props.children}
            </div>
        </div>
    )
}

export default layout;