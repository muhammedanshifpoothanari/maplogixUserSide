import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'


const layout = (props: {
    children: React.ReactNode
    sideBar: React.ReactNode
    content: React.ReactNode
  }) => {
    return(
        <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
             {/* {props.sideBar} */}
             {props.content}
          </div>
         </div>
      </div>   
    )
}

export default layout;