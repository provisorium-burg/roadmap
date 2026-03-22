import { useState, useMemo } from "react";
import { RoadmapHeader } from "./components/RoadmapHeader";
import { RoadmapTimeline } from "./components/RoadmapTimeline";
import { RoadmapLegend } from "./components/RoadmapLegend";
import { RoadmapFilters } from "./components/RoadmapFilters";
import { RoadmapGuide } from "./components/RoadmapGuide";
import { roadmapData } from "./data/roadmapData";

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
  };

  const filteredData = useMemo(() => {
    if (selectedCategories.length === 0) {
      return roadmapData;
    }

    return {
      ...roadmapData,
      phases: roadmapData.phases.map((phase) => ({
        ...phase,
        tasks: phase.tasks.filter((task) =>
          selectedCategories.includes(task.category)
        ),
      })),
    };
  }, [selectedCategories]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <RoadmapHeader
          projectTitle={roadmapData.projectTitle}
          duration={roadmapData.duration}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <RoadmapGuide />
            <RoadmapFilters
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
              onReset={handleReset}
            />
            <RoadmapLegend />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
              <RoadmapTimeline data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}