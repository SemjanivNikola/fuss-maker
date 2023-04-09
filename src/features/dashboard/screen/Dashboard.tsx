import DocumentationList from "../components/DocumentationList";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
    return (
        <div style={{ width: "100%", padding: "16px 48px" }}>
            <h1>DASHBOARD</h1>
            <DocumentationList />
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "100%",
                    gap: 16,
                    marginBottom: 24
                }}
            >
                <ProjectCard />
                <ProjectCard />
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "100%",
                    gap: 16
                }}
            >
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};

// clip-path: polygon(0% 0%, 33% 0%, 38% 7%, 39% 13%, 39% 18%, 39% 26%, 39% 32%, 38% 40%, 35% 46%, 31% 53%, 28% 62%, 24% 70%, 21% 81%, 21% 90%, 22% 100%, 0% 100%);

export default Dashboard;
