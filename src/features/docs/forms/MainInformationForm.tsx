import TextInput from "@/components/TextInput";

const MainInformationForm = () => {
    function handleSubmit(e?: any) {
        e?.preventDefault();
    }
    return (
        <div className="form-container">
            <div className="form-title-section">
                <h4>Popunjavanje knjige prometa</h4>
                <p>Odaberite i popunite obrasce za preuzimanje</p>
            </div>
            <hr />
            <div className="form-section">
                <div className="description">
                    <h4>Popunjavanje knjige prometa</h4>
                    <p>Odaberite i popunite obrasce za preuzimanje</p>
                </div>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <TextInput name="title" type="text" label="Title*" />
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

export default MainInformationForm;
