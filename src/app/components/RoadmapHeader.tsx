import { Card } from "./ui/card";
import { Calendar, Target, Leaf, Building2 } from "lucide-react";

interface RoadmapHeaderProps {
  projectTitle: string;
  duration: string;
}

// SDG-Icon als inline SVG
const SDGIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#E5243B"/>
    <text x="32" y="40" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">
      SDG
    </text>
  </svg>
);

export function RoadmapHeader({ projectTitle, duration }: RoadmapHeaderProps) {
  return (
    <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{projectTitle}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">{duration}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-2 border-2 border-gray-200">
              <Building2 className="w-9 h-9 text-gray-700" />
            </div>
            <div className="text-sm font-medium">Die Burg</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-2 border-2 border-green-200">
              <SDGIcon />
            </div>
            <div className="text-sm font-medium">Nachhaltigkeit</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-2">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-sm font-medium">Reallabor</div>
          </div>
        </div>
      </div>

      {/* Der Fahrplan - Beschreibung */}
      <div className="mt-6 bg-white rounded-lg p-6 border border-green-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Der Fahrplan</h2>
        <p className="text-gray-700 leading-relaxed">
          Diese interaktive Roadmap visualisiert den zeitlichen Ablauf unseres Nachhaltigkeitsprojekts.
          Die Burg wird als Ganzes hochschulweit zum Experimentierfeld - von der Mensa über die
          Werkstätten bis zu den Grünflächen. Alle drei Standorte (Campus Design, Campus Kunst, Hermes-Gebäude)
          und alle Hochschulangehörigen sind eingebunden. Die Roadmap zeigt, wie wir in 22 Monaten durch
          5 Projektphasen hindurch konkrete Maßnahmen in 6 verschiedenen Bereichen umsetzen.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">22</div>
          <div className="text-sm text-gray-600">Monate</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">5</div>
          <div className="text-sm text-gray-600">Phasen</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">6</div>
          <div className="text-sm text-gray-600">Kategorien</div>
        </div>
      </div>      
    </Card>
  );
}