import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table";

const Recommendataion = () => {
    return (
            <Card className="pl-px my-10 mx-10 flex flex-col align-middle justify-center py-10">
                 <Table>
                    <TableCaption>Recomendation</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>user</TableHead>
                            <TableHead>User Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                    </TableBody>
                </Table>
            </Card>
    )
}

export default Recommendataion;