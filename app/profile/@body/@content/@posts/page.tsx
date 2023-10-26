import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardHolder from "./card";



const Posts = () => {
    return (
        <Card className="mx-10 mb-10 my-10">
            <CardHeader>post</CardHeader>
            <CardContent>
               <Tabs >
                   <TabsList>
                       <TabsTrigger value="all">All</TabsTrigger>
                       <TabsTrigger value="Balence">succussfull</TabsTrigger>
                       <TabsTrigger value="History">pending</TabsTrigger>
                       <TabsTrigger value="History">expired</TabsTrigger>
                   </TabsList>
                   <Separator orientation="horizontal" className="my-10"/>
                   <TabsContent value="all" className="my-10 grid grid-cols-10 gap-4">
                     <CardHolder />
                     <CardHolder />
                     <CardHolder />
                     <CardHolder />
                   </TabsContent>
               </Tabs>
            </CardContent>
        </Card>
    )
}
export default Posts;