"use client"
import { Menubar, MenubarTrigger ,MenubarMenu} from "@/components/ui/menubar";
import { ModeToggle } from './modeToggle';
import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session } = useSession()
    if (session) {
    return (
        <div className="flex flex-row justify-between gap-1">
        <ModeToggle />
        <Menubar className="flex justify-between">
            <MenubarMenu>
                <MenubarTrigger onClick={() => signOut()} >Logout</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
        </div>
    )
    } else{
        return (
            <div className="flex flex-row justify-between gap-1">
            <ModeToggle />
            <Menubar className="flex justify-between">
                <MenubarMenu>
                    <MenubarTrigger onClick={() => signIn()} >Login</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            </div>
        )
    }
}

export default page;