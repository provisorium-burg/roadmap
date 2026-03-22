import { Card } from "./ui/card";
import { AnimatedCounter } from "./ui/animated-counter"; 
import { Calendar, Target, Layers, Bookmark } from "lucide-react";

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
        <div className="flex gap-8 justify-center items-start">
          {/* Logo der Burg */}
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-2 overflow-hidden p-2">
              <img src="Logo_Burg.svg" alt="Die Burg Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-sm font-medium">Burg</div>
          </div>

          {/* SDG Nachhaltigkeit Icon */}
          <div className="flex flex-col items-center w-24">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-2 overflow-hidden p-1">
              <img src="sdg.png" alt="SDG Nachhaltigkeit" className="w-full h-full object-contain" />
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
              <div className="flex justify-center mb-2">
                <Calendar className="w-6 h-6 text-olive-600 group-hover:scale-110 transition-transform" />
              </div>
          <div className="text-2xl font-bold text-green-600">
            <AnimatedCounter value={22} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">Monate</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-center mb-2">
            <Layers className="w-6 h-6 text-olive-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-bold text-blue-600">
            <AnimatedCounter value={5} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">Phasen</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-center mb-2">
            <Bookmark className="w-6 h-6 text-olive-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-bold text-purple-600">
             <AnimatedCounter value={6} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">Kategorien</div>
        </div>
      </div>      
    </Card>
  );
}