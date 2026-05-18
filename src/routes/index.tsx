import { createFileRoute } from "@tanstack/react-router";
import { OurBusiness, ourBusinessHead } from "./-our-business";

export const Route = createFileRoute("/")({
  head: ourBusinessHead,
  component: OurBusiness,
});
