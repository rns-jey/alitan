import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export default function ActionTooltip({ label, children, side, align }: ActionTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">{label.toLocaleLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
