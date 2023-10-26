import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import Link from "next/link";

const page = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href='/'>
                        Home</Link>
                </MenubarTrigger>
                <MenubarTrigger>
                    <Link href='/chat'>Chat</Link>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href='/marketplace'>MarketPlace</Link>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    directory
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem inset>Load Directory</MenubarItem>
                    <MenubarItem inset>Truck Directory</MenubarItem>
                    <MenubarItem inset>WareHouse Directory</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href='/profile'>Profile</Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

export default page;