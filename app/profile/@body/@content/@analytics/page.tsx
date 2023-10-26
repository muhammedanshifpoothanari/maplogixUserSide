import { Overview } from "@/components/graph";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Analytics = () => {
    return (
        <div className='border-l col-start-5 col-end-11'>
        <Card className="mx-10 mb-10 my-10">
            <CardHeader>Analytics</CardHeader>
            <CardContent>
               <Tabs >
                   <TabsList>
                       <TabsTrigger value="all">All</TabsTrigger>
                       <TabsTrigger value="userVisits">user visit </TabsTrigger>
                       <TabsTrigger value="posts">total post</TabsTrigger>
                   </TabsList>
                   <Separator orientation="horizontal" className="my-10"/>
                   <TabsContent value="all" className="my-10">
                       <Overview />
                   </TabsContent>
               </Tabs>
            </CardContent>
        </Card>
        </div>
    )
}
export default Analytics;