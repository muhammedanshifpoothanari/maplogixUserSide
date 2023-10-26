const {
    Menubar
} = require('../../components/ui/menubar.tsx')

const layout = (props: {
    children: React.ReactNode
    logo: React.ReactElement
    login: React.ReactNode
    navContent: React.ReactNode
  }) => {
    return(
       <>
        <Menubar className="flex w-full justify-between h-auto">
           {props.logo}
           <div className="md:block hidden">
           {props.navContent}
           </div>
           {props.login}
           {props.children}
        </Menubar>
        <div className="md:hidden  lg:hidden xl:hidden 2xl:hidden flex justify-center">
           {props.navContent}
           </div>
        </>
    )
}

export default layout;