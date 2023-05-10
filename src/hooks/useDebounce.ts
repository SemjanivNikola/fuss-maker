import { useEffect, useState } from "react";

const DEFAULT_DELAY = 800;

export default function useDebounce<T>(state: T, delayMs: number = DEFAULT_DELAY) {
    const [debounced, setDebounced] = useState(state);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounced(state);
        }, delayMs);

        return () => clearTimeout(id);
    }, [delayMs, state]);

    return debounced;
}
