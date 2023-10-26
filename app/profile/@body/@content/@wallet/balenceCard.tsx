"use client"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

const Balence = () => {
    return (
        <Card className="flex h-[100px] w-[200px]">
        <CardHeader>my balence💰:</CardHeader>
        <CardContent className="p-6">
            <CardDescription>$0</CardDescription>
        </CardContent>
      </Card>
    )
}

export default Balence;