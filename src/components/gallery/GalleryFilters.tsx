import clsx from "clsx";
import Container from "../ui/Container";

type GalleryFiltersProps = {
  filters: readonly string[];
  activeFilter: string;
  onChange: (filter: string) => void;
};

export default function GalleryFilters({
  filters,
  activeFilter,
  onChange,
}: GalleryFiltersProps) {
  return (
    <Container>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              className={clsx(
                "rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
                active
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border bg-white text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </Container>
  );
}
