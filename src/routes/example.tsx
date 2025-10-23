import { createFileRoute } from "@tanstack/react-router";
import Example from "../components/Example";

export const Route = createFileRoute("/example")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Example />;
}
