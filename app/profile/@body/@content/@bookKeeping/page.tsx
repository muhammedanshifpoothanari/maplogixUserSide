import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookKeeping from "./bookKeeping";



const Book = () => {
    return (
        <Card className="mx-10 mb-10 my-10">
            <CardHeader>BookKeeping</CardHeader>
            <CardContent>
               <Tabs >
                   <TabsList>
                       <TabsTrigger value="Daily">Daily Report</TabsTrigger>
                       <TabsTrigger value="payable">payable</TabsTrigger>
                       <TabsTrigger value="payed">payed</TabsTrigger>
                       <TabsTrigger value="Monthly">Monthly Report</TabsTrigger>
                       <TabsTrigger value="Weekly">Weekly Report</TabsTrigger>
                       <TabsTrigger value="Yearly">Yearly Report</TabsTrigger>
                   </TabsList>
                   <Separator orientation="horizontal" className="my-10"/>
                   <TabsContent value="Daily" className="my-10 flex justify-between">
                     <BookKeeping />
                   </TabsContent>
               </Tabs>
            </CardContent>
        </Card>
    )
}
export default Book;