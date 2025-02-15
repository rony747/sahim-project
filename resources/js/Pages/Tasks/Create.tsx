import MainPageLayout from "@/Layouts/MainPageLayout";

import {useForm} from '@inertiajs/react'
import {FormEvent} from "react";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/Components/ui/select"
import {useToast} from "@/hooks/use-toast"
import FormErrors from "@/Components/ui/formErrors";
import CardSimple from "@/Components/ui/CardSimple";
import {Textarea} from "@/Components/ui/textarea";
import {Label} from "@/Components/ui/label";
import {Client, Enums} from "@/types/global";

export default function Create({statuses, priorities, clients}: { statuses: Enums, priorities: Enums, clients: Client[] }) {
    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
        description: '',
        status: '',
        priority: '',
        price: '',
        due_date: '',
        start_date: '',
        completed_at: '',
        client_id: '',
        files: [] as File[],
    })
    const {toast} = useToast()


    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post('/tasks', {
            preserveScroll: true, onSuccess: () => {
                reset('title', 'description', 'status', 'priority', 'price', 'due_date', 'start_date', 'completed_at', 'client_id', 'files');
                toast({
                    title: "Success", description: "New Task Added",
                })
            },
        })

    }

    return (
        <>
            <MainPageLayout title={'Add New Task'}>
                <CardSimple>
                    <form onSubmit={submit} className={'flex flex-col gap-4'} encType={'multipart/form-data'}>
                        <div>
                            <Label htmlFor={'title'}>Title</Label>
                            <Input type={'text'} value={data.title} required onChange={e => setData('title', e.target.value)} />
                            <FormErrors errors={errors.title} />
                        </div>
                        <div>
                            <Label htmlFor={'description'}>Description</Label>
                            <Textarea defaultValue={data.description} onChange={e => setData('description', e.target.value)} />
                            <FormErrors errors={errors.description} />
                        </div>
                        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 '}>
                            <div>
                                <Label htmlFor={'status'}>Status</Label>
                                <Select defaultValue={`todo`} onValueChange={e => setData('status', e)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(statuses).map(([key, value]) => (
                                            <SelectItem key={key} value={key}>{value}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormErrors errors={errors.status} />
                            </div>
                            <div>
                                <Label htmlFor={'priority'}>Priority</Label>
                                <Select defaultValue={`low`} onValueChange={e => setData('priority', e)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a value" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(priorities).map(([key, value]) => (
                                            <SelectItem key={key} value={key}>{value}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormErrors errors={errors.priority} />
                            </div>
                            <div>
                                <Label htmlFor={'price'}>Price</Label>
                                <Input type={'text'} placeholder={'Price'} value={data.price} onChange={e => setData('price', e.target.value)} />
                                <FormErrors errors={errors.price} />
                            </div>
                        </div>
                        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 '}>
                            <div>
                                <Label htmlFor={'due_date'}>Due Date</Label>
                                <Input type={'date'} placeholder={'Due Date'} value={data.due_date} onChange={e => setData('due_date', e.target.value)} />
                                <FormErrors errors={errors.due_date} />
                            </div>
                            <div>
                                <Label htmlFor={'start_date'}>Start Date</Label>
                                <Input type={'date'} placeholder={'Start Date'} value={data.start_date} onChange={e => setData('start_date', e.target.value)} />
                                <FormErrors errors={errors.start_date} />
                            </div>
                            <div>
                                <Label htmlFor={'client_id'}>Client</Label>
                                <Select defaultValue={data.client_id} onValueChange={e => setData('client_id', e)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a client" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {clients.map((client) => (
                                            <SelectItem key={client.id} value={`${client.id}`}>{client.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormErrors errors={errors.client_id} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="files">Attachments</Label>
                            {/*<FileUploadInput */}
                            {/*    onFilesSelected={(files) => setData('files', files)}*/}
                            {/*    error={errors.files} */}
                            {/*/>*/}
                            <Input type={'file'} multiple onChange={e => setData('files', e.target.files ? Array.from(e.target.files) : [])} />
                            <FormErrors errors={errors.files} />
                        </div>
                        <Button type="submit" disabled={processing} className={'w-48'}>Add New Task</Button>
                    </form>
                </CardSimple>
            </MainPageLayout>
        </>
    )
}
