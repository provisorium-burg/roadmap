import { Card } from "./ui/card";
import { MousePointer2, Eye, Target, Info } from "lucide-react";

export function RoadmapGuide() {
  return (
    <Card className="p-5 bg-blue-50 border-2 border-blue-200">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">So funktioniert's</h3>
      </div>
      
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex gap-3">
          <MousePointer2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-medium">Klicken:</span> Klicken Sie auf einen Task oder Meilenstein, um alle Details in einem Dialog zu sehen
          </div>
        </div>
        
        <div className="flex gap-3">
          <Eye className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-medium">Mouse-Over:</span> Fahren Sie mit der Maus über Ereignisse, um eine Schnellvorschau zu erhalten
          </div>
        </div>
        
        <div className="flex gap-3">
          <Target className="w-4 h-4 bg-yellow-400 border-2 border-yellow-600 rotate-45 shrink-0 mt-1" />
          <div>
            <span className="font-medium">Meilensteine:</span> Gelbe Rauten markieren wichtige Projektmeilensteine
          </div>
        </div>

        <div className="mt-4 p-3 bg-white rounded border border-blue-200">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Tipp:</strong> Die farbigen Balken repräsentieren die Dauer der Aktivitäten. 
            Nutzen Sie die Filter links, um nur bestimmte Kategorien anzuzeigen. Die senkrechten 
            Linien helfen bei der zeitlichen Orientierung.
          </p>
        </div>
      </div>
    </Card>
  );
}
