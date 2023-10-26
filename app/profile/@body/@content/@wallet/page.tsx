import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Balence from "./balenceCard";
import History from "./history";


const Wallet = () => {
    return (
        <Card className="mx-10 mb-10 my-10">
            <CardHeader>Wallet</CardHeader>
            <CardContent>
               <Tabs >
                   <TabsList>
                       <TabsTrigger value="all">All</TabsTrigger>
                       <TabsTrigger value="Balence">Balence</TabsTrigger>
                       <TabsTrigger value="History">History</TabsTrigger>
                   </TabsList>
                   <Separator orientation="horizontal" className="my-10"/>
                   <TabsContent value="all" className="my-10 flex justify-between">
                    <Balence />
                     <History />
                   </TabsContent>
               </Tabs>
            </CardContent>
        </Card>
    )
}
export default Wallet;