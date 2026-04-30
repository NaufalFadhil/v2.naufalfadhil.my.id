type EmptyStateProps = {
  message: string;
  onClear: () => void;
};

export function EmptyState({ message, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-muted-foreground text-sm">{message}</p>
      <button onClick={onClear} className="mt-3 text-xs text-foreground underline">
        Clear filters
      </button>
    </div>
  );
}
