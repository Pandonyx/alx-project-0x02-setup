import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
        <div className="p-8 flex flex-col items-center gap-4">
            <Button size="small" shape="rounded-sm">Small / rounded-sm</Button>
            <Button size="medium" shape="rounded-md">Medium / rounded-md</Button>
            <Button size="large" shape="rounded-full">Large / rounded-full</Button>
        </div>
    </div>
  );
}