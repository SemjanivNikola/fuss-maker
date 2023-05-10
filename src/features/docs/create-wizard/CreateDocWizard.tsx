import TextInput from "@/components/TextInput";
import WizardStepper from "./WizardStepper";
import WizardSlider from "./WizardSlider";

const defaultValues = {
    title: "title",
    desc: "desc"
};

const CreateDocWizard = () => {
    const error = {
        title: ""
    };
    function handleSubmit(event?: any) {
        event.preventDefault();
        console.log(event);
    }
    return (
        <div className="container">
            <WizardStepper title="Create new Docs" />
            <WizardSlider />
            {/* <form action="" method="POST" onSubmit={handleSubmit}>
                <TextInput name="title" type="text" label="Title" error={error.title} initValue={defaultValues.title} />
                <TextInput
                    name="desc"
                    type="text"
                    label="Description"
                    error={error.title}
                    initValue={defaultValues.desc}
                />
                <button type="submit">Submit</button>
            </form> */}
        </div>
    );
};

export default CreateDocWizard;
