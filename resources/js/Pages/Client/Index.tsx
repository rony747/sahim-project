import MainPageLayout from "@/Layouts/MainPageLayout";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table"
import {Trash2} from "lucide-react";
import {Client} from "@/types/global";
import {useForm} from "@inertiajs/react";
import {toast} from "@/hooks/use-toast";
import CardSimple from "@/Components/ui/CardSimple";

export default function Index({clients}:{clients:Client[]}) {
    const { delete: destroy, processing } = useForm()
    const handleDelete = (id:number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            destroy(route('client.destroy', id), {
                preserveScroll: true,
                onSuccess: () => {

                    toast({
                        title: "Success",
                        description: "Client Deleted",
                    })
                },
                onError: () => {
                    alert('Error deleting post')
                }
            })
        }
    }
    return (
        <MainPageLayout title={'All Clients'}>
            <CardSimple>
                <Table className={'w-full'}>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30px]">#</TableHead>
                            <TableHead className="w-[300px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Website</TableHead>
                            <TableHead className="text-right ">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients?.map((client:Client,index)=> <TableRow key={client.name}>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell className="font-medium">{client.name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>{client.website}</TableCell>
                            <TableCell className="text-right flex justify-end"><Trash2 onClick={()=>handleDelete(client.id)} /></TableCell>
                        </TableRow>)}

                    </TableBody>
                </Table>
            </CardSimple>


        </MainPageLayout>
    )
}

