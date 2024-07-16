import { Button } from "@/components/atoms/button";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>
  );
}
