import { FormProps } from "@/types/FormProps";
import { useForm as useIneriaForm } from "@inertiajs/react";
import { InputHTMLAttributes } from "react";

export function useForm<T extends Partial<Record<keyof T, unknown>>>(initialValues: T): FormProps<T> {
    const form = useIneriaForm(initialValues);
    return {
        register: (name: keyof T, type: InputHTMLAttributes<HTMLInputElement>["type"] = "text") => {
            return {
                id: name as string,
                name: name,
                value: "hehe",
                type: type,
                error: form.errors
            };
        },
        submitForm(e: any) {
            e.preventDefault();
            switch (e.target.method) {
                case "post":
                    form.post(e.target.action);
                    break;
                case "update":
                    form.put(e.target.action);
                    break;
                case "delete":
                    form.delete(e.target.action);
                    break;
                default:
                    form.get(e.target.action);
                    break;
            }
        },
        ...form
    };
}
