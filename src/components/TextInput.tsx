import { AutofillAnimationEnum } from "@/enums/AutofillAnimation";
import TextInputProps from "@/types/TextInputProps";
import { forwardRef, useEffect, useRef, useState } from "react";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(function TextInput(
    { label, isFocused = false, error, initValue, ...otherProps },
    ref
) {
    const [value, setValue] = useState(initValue);
    const inputRef = ref ? (ref as unknown as HTMLInputElement) : null;
    const input = useRef<HTMLInputElement>(inputRef);

    useEffect(() => {
        if (isFocused && input !== null) {
            input.current?.focus();
        }
    }, []);

    function handleOnChange(e?: any) {
        setValue(e.target.value);
    }

    return (
        <div style={{ marginBottom: 24 }}>
            <div style={{ position: "relative" }}>
                <label
                    id={`${otherProps.name}-label`}
                    htmlFor={otherProps.name}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 8,
                        fontSize: 12,
                        letterSpacing: ".03rem",
                        padding: "0 4px",
                        backgroundColor: "rgb(34 36 52)",
                        transform: "translateY(-50%)"
                    }}
                >
                    {label}
                </label>
                <input value={value} className="text-input" ref={input} onChange={handleOnChange} {...otherProps} />
            </div>
            <p className="h-5 pt-1 text-xs font-medium text-red-500">{error}</p>
        </div>
    );
});

export default TextInput;
