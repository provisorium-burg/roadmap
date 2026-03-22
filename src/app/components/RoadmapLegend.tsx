import { Card } from "./ui/card";

export function RoadmapLegend() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Legende</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Kategorien</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-blue-400 bg-blue-50"></div>
              <span className="text-sm">Infrastruktur</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-purple-400 bg-purple-50"></div>
              <span className="text-sm">Forschung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-green-400 bg-green-50"></div>
              <span className="text-sm">Lehre</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-orange-400 bg-orange-50"></div>
              <span className="text-sm">Community</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-teal-400 bg-teal-50"></div>
              <span className="text-sm">Governance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-pink-400 bg-pink-50"></div>
              <span className="text-sm">Kommunikation</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Symbole</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 border-2 border-yellow-600 rotate-45"></div>
              <span className="text-sm">Meilenstein</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-gray-400 bg-gray-50"></div>
              <span className="text-sm">Aufgabe/Aktivität</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
