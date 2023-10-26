import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
    return (
       <div className="col-start-1 col-end-4 flex-col justify-center align-middle">   
               <Tabs className="flex flex-col align-middle justify-center mx-3 my-10 h-[80%]" defaultValue="user1">
                <TabsList  className="flex-col w-full h-full px-0 mx-0 ">
                    <div   className="w-full flex-col my-10 mx-0 px-0">
                         <TabsTrigger value="user1" className="w-full">user1</TabsTrigger>
                         <TabsTrigger value="user2" className="w-full">user2</TabsTrigger>
                         <TabsTrigger value="user3" className="w-full">user3</TabsTrigger>
                    </div>
                </TabsList>
               </Tabs>
       </div>
    )
}

export default Page;