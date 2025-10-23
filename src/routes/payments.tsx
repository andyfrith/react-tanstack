import PaymentsTable from "@/components/PaymentsTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <PaymentsTable />
    </div>
  );
}
