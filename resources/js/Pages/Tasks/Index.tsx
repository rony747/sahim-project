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
import {Task} from "@/types/global";
import {Progress} from "@/Components/ui/progress";
import {Link} from "@inertiajs/react";
import TitleBar from "@/Components/TitleBar";
import CardSimple from "@/Components/ui/CardSimple";

export default function Index({tasks} : {tasks:Task[]}) {
console.log(tasks)
    return (
        <MainPageLayout title={'All Tasks'}>
            <CardSimple>
                <Table className={'w-full'}>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30px]">#</TableHead>
                            <TableHead className="w-[300px]">Title</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Progress</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks?.map((task:Task,index:number)=> <TableRow key={task.id}>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell className="font-medium"><Link href={`/tasks/${task.id}`}>{task.title}</Link></TableCell>
                            <TableCell>{task.client?.name}</TableCell>
                            <TableCell>{task.priority_label}</TableCell>
                            <TableCell>{task.status_label}</TableCell>
                            <TableCell><Progress value={task.progress_percent} className="h-[5px]" /></TableCell>
                            <TableCell className="text-right flex justify-end"><Trash2 /></TableCell>
                        </TableRow>)}

                    </TableBody>
                </Table>
            </CardSimple>



        </MainPageLayout>
    )
}

