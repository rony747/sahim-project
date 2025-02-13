import MainPageLayout from "@/Layouts/MainPageLayout";
import {useForm} from '@inertiajs/react'
import {FormEvent} from "react";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {useToast} from "@/hooks/use-toast"
import FormErrors from "@/Components/ui/formErrors";
import CardSimple from "@/Components/ui/CardSimple";

export default function Create() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '', email: '', phone: '', website: '',

    })
    const {toast} = useToast()

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post('/client', {
            preserveScroll: true, onSuccess: () => {
                reset('name', 'email', 'phone', 'website');
                toast({
                    title: "Success", description: "New Client Added",
                })
            },
        })

    }

    return (<>
        <MainPageLayout title={'Add New Client'}>
            <CardSimple>
                <form onSubmit={submit} className={'flex flex-col gap-2'}>
                    <Input type={'text'} placeholder={'Name *'} value={data.name} required onChange={e => setData('name', e.target.value)} />
                    <FormErrors errors={errors.name} />
                    <Input type={'email'} placeholder={'E-mail *'} value={data.email} required onChange={e => setData('email', e.target.value)} />
                    <FormErrors errors={errors.email} />
                    <Input type={'tel'} placeholder={'Phone'} value={data.phone} onChange={e => setData('phone', e.target.value)} />
                    <FormErrors errors={errors.phone} />
                    <Input type={'url'} placeholder={'Website'} value={data.website} onChange={e => setData('website', e.target.value)} />
                    <FormErrors errors={errors.website} />
                    <Button type="submit" disabled={processing} className={'w-48'}>Add New Client</Button>
                </form>
            </CardSimple>
        </MainPageLayout>
    </>)
}
