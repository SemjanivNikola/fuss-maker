import { TooltipTextInputProps } from "@/types/TextInputProps";
import { forwardRef, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";
import TextInput from "./TextInput";

const TextInputWithTooltip = forwardRef<HTMLInputElement | null, TooltipTextInputProps>(function TextInputWithTooltip(
    { children, ...inputProps },
    ref
) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-row gap-4">
            <TextInput ref={ref} {...inputProps} />
            <div className="flex flex-col">
                <ButtonIcon type="button" iconName="info" iconColor="#000" onClick={toggleModal} className="grow" />
                <div className="placeholder pt-1 h-5 mb-2" />
            </div>
            <Modal show={isOpen} onClose={toggleModal}>
                {children}
            </Modal>
        </div>
    );
});

export default TextInputWithTooltip;
