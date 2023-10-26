import { Children } from "react"


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