import { createFileRoute } from "@tanstack/solid-router";
import { createSignal } from "solid-js";
import { Button } from "~/components/ui/Button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = createSignal(0);

  const ok: () => void = () => setCount(count() + 1);

  return <Button onclick={ok}>Count: {count()}</Button>;
}
