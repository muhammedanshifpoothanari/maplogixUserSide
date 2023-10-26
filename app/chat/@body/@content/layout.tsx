import { Separator } from '@/components/ui/separator'
import { Inter } from 'next/font/google'

const layout = (props: {
    children: React.ReactNode
    contentBody: React.ReactNode
  }) => {
    return(
        <>
            {props.contentBody}
            {props.children}
        </>
    )
}

export default layout;