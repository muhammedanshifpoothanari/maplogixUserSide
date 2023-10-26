"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

const CardHolder = () => {
    return (
        <Card className="col-span-5">
        <CardHeader>my card</CardHeader>
        <CardContent className="p-6">
            <CardDescription>$0</CardDescription>
            <CardDescription>$0</CardDescription>
            <CardDescription>$0</CardDescription>
            <CardDescription>$0</CardDescription>
        </CardContent>
        <CardFooter>
           <Button variant="secondary"> Succussfull✅</Button>
        </CardFooter>
      </Card>
    )
}

export default CardHolder;