import { TextInputWithIconProps } from "@/types/TextInputProps";
import Icon from "./Icon";

const TextInputWithIcon = ({
    type = "text",
    name,
    value,
    iconName,
    iconColor = "#000",
    onChange
}: TextInputWithIconProps) => {
    return (
        <div className="w-full max-w-md flex flex-row items-center gap-4 py-2 pr-1.5 pl-4 bg-white rounded">
            <Icon name={iconName} color={iconColor} size={16} />
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="grow outline-none border-none p-0 ring-0 focus:ring-transparent"
                placeholder="Pretraži"
            />
        </div>
    );
};

export default TextInputWithIcon;
