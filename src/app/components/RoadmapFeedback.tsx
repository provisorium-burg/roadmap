import { Card } from "./ui/card";
import { MessageSquareShare, Send, Sparkles } from "lucide-react";

export function RoadmapFeedback() {
  const email = "anyanwu@burg-halle.de";
  const subject = encodeURIComponent("Feedback zur Provisorium-Roadmap");
  const body = encodeURIComponent("Hallo Projektteam,\n\nich habe folgendes Feedback zur Roadmap:\n\n");

  return (
    <Card className="p-5 bg-olive-50 border-2 border-olive-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquareShare className="w-5 h-5 text-olive-600" />
        <h3 className="text-lg font-semibold text-gray-900">Feedback & Mitgestaltung</h3>
      </div>
      
      <div className="space-y-4 text-sm text-gray-700">
        <div className="flex gap-3">
          <Sparkles className="w-5 h-5 text-olive-600 shrink-0 mt-0.5" />
          <div>
            <p className="leading-relaxed">
              Dies ist eine <span className="font-bold text-olive-800">vorläufige Version</span>. 
              Wir bauen das Reallabor gemeinsam auf – Deine Impulse sind entscheidend!
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-olive-200">
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Hast Du Vorschläge für neue Aktivitäten, Korrekturen zum Zeitplan oder 
            fehlt Dir wichtige Meilensteine?
          </p>
          
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-olive-600 text-slate-900 font-medium rounded-md hover:bg-olive-700 transition-colors shadow-sm active:scale-95"
          >
            <Send className="w-4 h-4" />
            Anmerkung schicken
          </a>
        </div>

        <p className="text-[10px] text-center text-gray-400 italic">
          Ein Klick öffnet Ihr Standard-E-Mail-Programm.
        </p>
      </div>
    </Card>
  );
}
