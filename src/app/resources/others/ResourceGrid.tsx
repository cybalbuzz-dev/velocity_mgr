import { ResourceCard } from "./ResourceCard";
import { resources } from "@/data/resources";

export const ResourceGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((res) => (
        <ResourceCard key={res.slug} {...res} />
      ))}
    </div>
  );
};
