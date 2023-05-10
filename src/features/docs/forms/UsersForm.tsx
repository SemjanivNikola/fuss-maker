import TextInput from "@/components/TextInput";

const UsersForm = () => {
    function handleSubmit(e?: any) {
        e?.preventDefault();
    }
    return (
        <div className="form-container">
            <div className="form-title-section">
                <h4>Add users to project</h4>
                <p>Select users within your workspace or invite people to join in creating something awesome</p>
            </div>
            <hr />
            <div className="form-section">
                <div className="description">
                    <h4>Add users</h4>
                    <p>
                        Here you can select people withing your workspace. There is not limit to how much people can be
                        added
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

export default UsersForm;
