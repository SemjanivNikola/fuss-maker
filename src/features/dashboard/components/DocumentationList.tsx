import DocumentationListItem from "./DocumentationListItem";

const list: any = [
    { id: 1, name: "Marketino", desc: "Marketino monorepo desc" },
    { id: 2, name: "Marketino", desc: "Marketino monorepo desc" },
    { id: 3, name: "Marketino", desc: "Marketino monorepo desc" },
    { id: 4, name: "Marketino", desc: "Marketino monorepo desc" },
    { id: 5, name: "Marketino", desc: "Marketino monorepo desc" },
    { id: 6, name: "Marketino", desc: "Marketino monorepo desc" }
];

const DocumentationList = () => {
    return (
        <div className="section-wrapper py-large">
            <div className="flex-row justify-between">
                <h2>Recent Docs</h2>
                <a href="/docs-list">View all</a>
            </div>
            <div className="flex-row">
                <a className="documentation-card" style={{ width: "14%" }} href="/create-doc-wizard">
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
                            <h5>Create new</h5>
                            <small>Doc</small>
                        </div>
                    </div>
                </a>
                {list.map((item: any) => (
                    <DocumentationListItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default DocumentationList;
