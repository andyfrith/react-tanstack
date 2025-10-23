import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>About</Button>
    </div>
  );
}
