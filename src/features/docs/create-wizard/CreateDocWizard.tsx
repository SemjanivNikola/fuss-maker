import Icon from "../../../components/Icon";

const CreateDocWizard = () => {
    return (
        <div className="container">
            <h1>Content</h1>
            <div className="form-step-wrapper">
                <div className="form-step">
                    <span>STEP 1</span>
                    <div className="form-step-inner">
                        <h5>Draft</h5>
                        <Icon name="check" size={16} color="#008b8b" />
                        <div className="pill">
                            <span>3/3</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step">
                    <span>STEP 2</span>
                    <div className="form-step-inner">
                        <h5>Creation</h5>
                        <Icon name="check" size={16} color="#008b8b" />
                        <div className="pill">
                            <span>5/5</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step">
                    <span>STEP 3</span>
                    <div className="form-step-inner">
                        <h5>Negotiation</h5>
                        <Icon name="check" size={16} color="#008b8b" />
                        <div className="pill">
                            <span>4/5</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
                <div className="form-step">
                    <span>STEP 4</span>
                    <div className="form-step-inner">
                        <h5>eSignature</h5>
                        <Icon name="check" size={16} color="#008b8b" />
                        <div className="pill">
                            <span>1/2</span>
                        </div>
                    </div>
                    <div className="progress-bar" />
                </div>
            </div>
        </div>
    );
};

export default CreateDocWizard;
