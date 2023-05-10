import Modal from "@/components/Modal";
import EpicForm from "../forms/EpicForm";
import MainInformationForm from "../forms/MainInformationForm";
import UsersForm from "../forms/UsersForm";

const WizardSlider = () => {
    return (
        <div className="wizard-slider-wrapper">
            <div className="wizard-slider">
                <div className="slide">
                    <MainInformationForm />
                </div>
                <div className="slide">
                    <UsersForm />
                </div>
                <div className="slide">
                    <EpicForm />
                </div>
                <div className="slide">SLAJD 4</div>
            </div>
        </div>
    );
};

export default WizardSlider;
