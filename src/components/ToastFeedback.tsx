import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const SHOW_FEEDBACK_IN_MS = 6000; // 6 seconds

const ToastFeedback = () => {
    const { flash } = usePage<any>().props;
    const [opacity, setOpacity] = useState(1);

    const hasMessage = flash.message !== null;

    useEffect(() => {
        if (hasMessage)
            setTimeout(() => {
                setOpacity(0);
                router.patch("/reset-flash");
            }, SHOW_FEEDBACK_IN_MS);
        else setOpacity(1);
    }, [hasMessage]);

    if (hasMessage)
        return (
            <div id="toast" className={flash.status} style={{ opacity: opacity }}>
                {flash.message}
            </div>
        );

    return null;
};

export default ToastFeedback;
