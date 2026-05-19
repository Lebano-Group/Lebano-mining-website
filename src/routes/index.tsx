import { createFileRoute } from "@tanstack/react-router";
import { Home, homeHead } from "./-home";

export const Route = createFileRoute("/")({
  head: homeHead,
  component: Home,
});
