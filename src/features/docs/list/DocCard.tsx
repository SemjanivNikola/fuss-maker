import Icon from "@/components/Icon";
import { CSSProperties } from "react";

// Track task progress, deployment status (staging, production), last update at and by who
const DocCard = () => {
    return (
        <div className="doc-card-wrapper">
            <h1>Content</h1>
            <div className="doc-card-content">
                <div className="percent" style={{ "--percent": 85 } as CSSProperties}>
                    <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                    </svg>
                    <div className="details">
                        <h2>
                            85<span>%</span>
                        </h2>
                        <p>html</p>
                    </div>
                </div>
                <div className="content-details">
                    <div className="detail-item">
                        <Icon name="account" size={16} />
                        <div>
                            <span className="detail-item-title">Size const</span>
                            <span>2,787</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocCard;
