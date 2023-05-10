import { useState } from "react";
import Icon from "../../components/Icon";

const Drawer = () => {
    const [position, setPosition] = useState("35px");
    function handleMouseMove(e?: any) {
        const position = e.pageY / 10;
        setPosition(position + "px");
    }

    function handleMouseLeave() {
        setPosition("45px");
    }

    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="drawer-wrapper">
            <div className="drawer-indicator" style={{ top: position }} />
            <div style={{ height: "8rem" }}>Logo</div>
            <button className="drawer-link active">
                <Icon name="plus" />
                <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>DASHBOARD</span>
            </button>
            <a href="/docs-list" className="drawer-link">
                <Icon name="plus" />
                <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>DOCS</span>
            </a>
            <button className="drawer-link">
                <Icon name="plus" />
                <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>STUDIO</span>
            </button>
            <button className="drawer-link">
                <Icon name="plus" />
                <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>SETTINGS</span>
            </button>
        </div>
    );
};

export default Drawer;
