import TextInput from "@/components/TextInput";

const EpicForm = () => {
    function handleSubmit(e?: any) {
        e?.preventDefault();
    }

    return (
        <div className="form-container">
            <div className="form-title-section">
                <h4>Create Epic</h4>
                <p>
                    Epic is a collection of features. Ideal number of features in epic is 8, but max limit is 16.
                    Anything that goes above it should be composed into new epic.
                </p>
            </div>
            <hr />
            <div className="form-section">
                <div className="description">
                    <h4>Add as many epic sections as you want</h4>
                    <p style={{ marginBottom: 16 }}>
                        Title should describe what an end-user would see and expect a system to do{" "}
                        <i>example: Company hosts photo contest</i>
                    </p>
                    <p>
                        Description is A more rounded description of a feature including type of a user, goal and a
                        reason behind it. Equation for epic description is this:{" "}
                        <i>{"As a <type of user>, I want <some goal> so that <some reason>"}</i> .
                    </p>
                </div>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <TextInput name="user" type="text" label="User*" />
                    <TextInput name="desc" type="text" label="Brief description*" />
                    <TextInput name="repourl" type="url" label="Repo URL" />
                    <TextInput name="designurl" type="url" label="Design URL*" />
                    <div className="form-action-wrapper">
                        <button className="submit-btn" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EpicForm;
