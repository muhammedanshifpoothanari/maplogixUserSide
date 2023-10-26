"use client"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BookKeeping = () => {
    return (
        <Card className="w-full">
        <CardHeader>Book Keeping📖:</CardHeader>
        <CardContent className="p-6">
            <CardDescription>
                <Table>
                    <TableCaption>wallet History</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>user</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                    </TableBody>
                </Table>
            </CardDescription>
        </CardContent>
      </Card>
    )
}

export default BookKeeping;