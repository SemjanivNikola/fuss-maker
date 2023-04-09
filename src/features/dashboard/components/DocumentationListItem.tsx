const DocumentationListItem = ({ item }: { item: any }) => {
    return (
        <div className="documentation-card">
            <div className="documentation-card-inner">
                <div
                    style={{
                        width: 42,
                        height: 42,
                        borderRadius: 8,
                        backgroundColor: "red",
                        fontSize: 32,
                        fontWeight: "bold"
                    }}
                >
                    P
                </div>
                <div>
                    <h5>{item.name}</h5>
                    <small>{item.desc}</small>
                </div>
            </div>
        </div>
    );
};

export default DocumentationListItem;
