import { InputHTMLAttributes } from "react";

type InputAttributes<F extends Record<keyof F, unknown>> = {
    register: (
        name: keyof F,
        type?: InputHTMLAttributes<HTMLInputElement>["type"]
    ) => {
        id: string;
        name: keyof F;
        value?: string | number;
        type: InputHTMLAttributes<HTMLInputElement>["type"];
        onChange: (e: any) => void;
        error: any;
    };
    submitForm: (e: any) => void;
};

export type FormProps<F extends Record<keyof F, unknown>> = InputAttributes<F>;

export type CustomerForm = {
    gdpr: boolean;
    vat_number: string;
    first_name: string;
    last_name: string;
    company_name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    zip: string;
    plus_package: boolean;
};

export type LoginForm = {
    email: string;
    password: string;
    remember: string;
};

export type OrderForm = {
    type: number;
    quantity: number;
};

export type TicketForm = {
    customerable_id: string;
    title: string;
    content: string;
    attachment: null | FileList;
};

export interface CommissionForm {
    from: string;
    to: string;
}
