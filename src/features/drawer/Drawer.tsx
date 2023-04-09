import Icon from "../../components/Icon";

const Drawer = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "2.5%",
                display: "flex",
                alignItems: "center",
                padding: "0 16px"
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        width: 38,
                        height: 38,
                        marginBottom: 42,
                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
                    }}
                >
                    <Icon name="plus" size={32} />
                </div>
                <Icon name="plus" size={32} />
                <Icon name="plus" size={32} />
                <Icon name="plus" size={32} />
                <Icon name="plus" size={32} />
            </div>
        </div>
    );
};

export default Drawer;
