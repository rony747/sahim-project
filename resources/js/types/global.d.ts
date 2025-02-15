import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';
import {number} from "zod";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}

export type Client ={
    id:number,
    name:string,
    email:string,
    phone?:string,
    website?:string
}
export type Task =
{
    id:number,
    title:string,
    description:string,
    status:string,
    priority:string,
    status_label:string,
    priority_label:string,
    price:string,
    due_date:string,
    start_date:string,
    completed_at:string,
    client_id:number,
    user_id:number,
    position:number,
    estimated_minutes:string,
    progress_percent:number,
    created_at:string,
    updated_at:string,
    client:Client,
}

export type User = {
    id:number,
    name:string,
    email:string,
    email_verified_at?:string
}
export type Enums = {
    [key: string]: string;
}
export type TaskFiles= {
    id: number,
    task_id: number,
    client_id: number,
    created_at: string,
    file_name: string,
    file_url: string,
    file_type: string,
    file_size: number,
    updated_at: string,
    user_id: number,

}