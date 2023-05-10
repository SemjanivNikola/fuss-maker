import { ButtonType } from "@/types/ButtonType";
import { ButtonHTMLAttributes } from "react";
import Icon from "./Icon";

const DEFAULT_ICON_SIZE = 16;

const ButtonIcon = ({
    type = ButtonType.SUBMIT,
    className = "",
    processing = false,
    iconName,
    iconSize = DEFAULT_ICON_SIZE,
    iconColor,
    title,
    onClick
}: {
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    className?: HTMLButtonElement["className"];
    processing?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    title?: string;
    onClick: () => void;
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex flex-row gap-2 items-center border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest 
                 transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className
            }
            disabled={processing}
        >
            <Icon name={iconName} size={iconSize} color={iconColor} />
            {title}
        </button>
    );
};

export default ButtonIcon;
