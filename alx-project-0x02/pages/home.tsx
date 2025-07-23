import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Homepage() {
    return (
        <div>
            <Header />
            <h1>Welcome to the Home Page</h1>
            <div className="flex flex-wrap gap-4">
                <Card title="Sample Card" content="This is a sample card component." />
                <Card title="Another Card" content={<p>This card contains <strong>React</strong> content.</p>} />
            </div>
        </div>
    );
    }