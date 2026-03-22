import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface RoadmapFiltersProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onReset: () => void;
}

const categories = [
  { name: "Infrastruktur", color: "bg-blue-100 text-blue-700 border-blue-300" },
  { name: "Forschung", color: "bg-purple-100 text-purple-700 border-purple-300" },
  { name: "Lehre", color: "bg-green-100 text-green-700 border-green-300" },
  { name: "Community", color: "bg-orange-100 text-orange-700 border-orange-300" },
  { name: "Governance", color: "bg-teal-100 text-teal-700 border-teal-300" },
  { name: "Kommunikation", color: "bg-pink-100 text-pink-700 border-pink-300" },
];

export function RoadmapFilters({ selectedCategories, onCategoryToggle, onReset }: RoadmapFiltersProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Filter nach Kategorie</h3>
        {selectedCategories.length > 0 && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            Zurücksetzen
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.name);
          return (
            <Badge
              key={category.name}
              variant="outline"
              className={`cursor-pointer transition-all ${
                isSelected ? category.color : "hover:bg-gray-100"
              }`}
              onClick={() => onCategoryToggle(category.name)}
            >
              {category.name}
            </Badge>
          );
        })}
      </div>
    </Card>
  );
}
