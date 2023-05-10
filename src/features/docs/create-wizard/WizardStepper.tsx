import Icon from "@/components/Icon";

const WizardStepper = ({ title }: { title?: string }) => {
    return (
        <div className="form-step-wrapper">
            <div className="form-title">
                <h1>{title}</h1>
            </div>
            <div className="form-step-list">
                <div className="form-step done">
                    <span>STEP 1</span>
                    <div className="form-step-inner">
                        <h5>Draft</h5>
                        <Icon name="check" size={16} color="#b32868" />
                        <div className="pill">
                            <span>3/3</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step active">
                    <span>STEP 2</span>
                    <div className="form-step-inner">
                        <h5>Creation</h5>
                        <Icon name="check" size={16} color="#b32868" />
                        <div className="pill">
                            <span>4/5</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step">
                    <span>STEP 3</span>
                    <div className="form-step-inner">
                        <h5>Negotiation</h5>
                        <Icon name="check" size={16} color="#141627" />
                        <div className="pill">
                            <span>0/5</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step">
                    <span>STEP 4</span>
                    <div className="form-step-inner">
                        <h5>eSignature</h5>
                        <Icon name="check" size={16} color="#141627" />
                        <div className="pill">
                            <span>0/2</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
            </div>
        </div>
    );
};

export default WizardStepper;
