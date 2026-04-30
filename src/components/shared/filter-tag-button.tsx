import { cn } from "@/lib/utils";

type FilterTagButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function FilterTagButton({ label, active, onClick }: FilterTagButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs transition-colors",
        active
          ? "border-foreground bg-foreground text-background font-medium"
          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
