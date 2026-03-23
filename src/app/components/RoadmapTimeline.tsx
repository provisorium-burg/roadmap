import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Milestone, Task, RoadmapData } from "./types/roadmap";
import { ChevronRight, Calendar, Users, Target, CheckCircle2 } from "lucide-react";

interface RoadmapTimelineProps {
  data: RoadmapData;
}

export function RoadmapTimeline({ data }: RoadmapTimelineProps) {
  const [selectedItem, setSelectedItem] = useState<Task | Milestone | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleItemClick = (item: Task | Milestone) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const getPhaseColor = (phase: string) => {
    const colors: Record<string, string> = {
      "Initiierung": "bg-blue-500",
      "Konzeption": "bg-purple-500",
      "Umsetzung": "bg-green-500",
      "Evaluation": "bg-orange-500",
      "Verstetigung": "bg-teal-500",
    };
    return colors[phase] || "bg-gray-500";
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Infrastruktur": "border-blue-400 bg-blue-50",
      "Forschung": "border-purple-400 bg-purple-50",
      "Lehre": "border-green-400 bg-green-50",
      "Community": "border-orange-400 bg-orange-50",
      "Governance": "border-teal-400 bg-teal-50",
      "Kommunikation": "border-pink-400 bg-pink-50",
    };
    return colors[category] || "border-gray-400 bg-gray-50";
  };

  const months = [
    "Mär '26", "Apr '26", "Mai '26", "Jun '26", "Jul '26", "Aug '26", "Sep '26", "Okt '26", "Nov '26", "Dez '26",
    "Jan '27", "Feb '27", "Mär '27", "Apr '27", "Mai '27", "Jun '27", "Jul '27", "Aug '27", "Sep '27", "Okt '27", "Nov '27", "Dez '27"
  ];

  const getMonthPosition = (date: string) => {
    const [year, month] = date.split("-").map(Number);
    const startYear = 2026;
    const startMonth = 3; // März
    const monthsFromStart = (year - startYear) * 12 + (month - startMonth);
    return (monthsFromStart / 22) * 100; // 22 months total
  };

  const getItemWidth = (startDate: string, endDate: string) => {
    const startPos = getMonthPosition(startDate);
    const endPos = getMonthPosition(endDate);
    // Add a full month width to the end position to represent the full duration
    const monthWidth = (1 / 22) * 100;
    return endPos - startPos + monthWidth;
  };

  return (
    <TooltipProvider>
      <div className="w-full">
        {/* Timeline Header with vertical lines */}
        <div className="sticky top-0 bg-white z-10 pb-2 border-b-2 border-gray-300">
          <div className="flex gap-0 text-xs relative">
            <div className="w-48 shrink-0 bg-gray-100 border-r-2 border-gray-300 py-3 px-4 text-right">
              <span className="font-semibold text-gray-700">Zeitleiste</span>
            </div>
            <div className="flex-1 flex">
              {months.map((month, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 text-center py-3 px-1 font-medium relative border-r border-gray-300 ${
                    idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phases */}
        {data.phases.map((phase, phaseIdx) => (
          <div key={phaseIdx} className="mb-8 relative">
            {/* Vertical month lines and alternating backgrounds */}
            <div className="absolute left-48 right-0 top-0 bottom-0 flex pointer-events-none">
              {months.map((_, idx) => (
                <div key={idx} className="flex-1 relative">
                  <div className={`absolute inset-0 ${idx % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'}`}></div>
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className={`h-8 rounded-lg px-4 flex items-center ${getPhaseColor(phase.name)} text-white font-semibold`}>
                {phase.name}
              </div>
              <div className="text-sm text-gray-500">
                {phase.quarter} {phase.year}
              </div>
            </div>

            {/* Tasks */}
            <div className="space-y-2 relative z-10">
              {phase.tasks.map((task, taskIdx) => (
                <div key={taskIdx} className="flex gap-1 items-center group">
                  <div className="w-48 shrink-0 text-sm pr-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 relative h-12">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <div
                          className={`absolute h-10 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg hover:z-20 ${getCategoryColor(task.category)} flex items-center px-3 gap-2`}
                          style={{
                            left: `${getMonthPosition(task.startDate)}%`,
                            width: `${getItemWidth(task.startDate, task.endDate)}%`,
                          }}
                          onClick={() => handleItemClick(task)}
                        >
                          <span className="text-sm font-medium truncate">{task.title}</span>
                          {task.status === "completed" && <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-md">
                        <div className="space-y-2">
                          <p className="font-semibold">{task.title}</p>
                          <p className="text-sm">{task.description}</p>
                          <div className="text-xs text-gray-500">
                            {task.startDate} - {task.endDate}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    {task.dependencies && task.dependencies.length > 0 && (
                      <div className="absolute left-0 -top-1 z-10">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones */}
            {phase.milestones.map((milestone, milestoneIdx) => (
              <div key={`milestone-${milestoneIdx}`} className="flex gap-1 items-center mt-2 relative z-10">
                <div className="w-48 shrink-0"></div>
                <div className="flex-1 relative h-8">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute flex items-center cursor-pointer group"
                        style={{
                          left: `${getMonthPosition(milestone.date)}%`,
                        }}
                        onClick={() => handleItemClick(milestone)}
                      >
                        <div className="w-4 h-4 bg-yellow-400 border-2 border-yellow-600 rotate-45 hover:scale-110 transition-transform"></div>
                        <div className="ml-2 text-sm font-semibold text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                          {milestone.title}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-md">
                      <div className="space-y-2">
                        <p className="font-semibold">{milestone.title}</p>
                        <p className="text-sm">{milestone.description}</p>
                        <div className="text-xs text-gray-500">{milestone.date}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ))}

            {/* Activities */}
            {phase.activities && phase.activities.map((activity, activityIdx) => (
              <div key={`activity-${activityIdx}`} className="flex gap-1 items-center mt-2 relative z-10">
                <div className="w-48 shrink-0"></div>
                <div className="flex-1 relative h-8">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute flex items-center cursor-pointer group"
                        style={{
                          left: `${getMonthPosition(activity.date)}%`,
                        }}
                        onClick={() => handleItemClick(activity)}
                      >
                        {/* Symbol aus der Legende: Quadratisch, abgerundet, grauer Rand */}
                        <div className="w-4 h-4 rounded border-2 border-gray-400 bg-gray-50 group-hover:scale-110 group-hover:border-olive-400 transition-all shadow-sm"></div>
                        
                        <div className="ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-900 whitespace-nowrap">
                          {activity.title}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="w-auto max-w-sm p-3 bg-slate-900 shadow-xl border border-gray-200">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b pb-1">
                          <p className="font-bold text-white leading-tight">
                            {activity.title}
                          </p>
                          <span className="ml-4 text-[10px] font-bold uppercase px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded whitespace-nowrap">
                            {activity.type}
                          </span>
                        </div>
                        <p className="text-sm text-white leading-snug">
                          {activity.description}
                        </p>
                        <div className="text-[10px] text-white font-mono italic">
                          {activity.date}
                        </div>
                        <div className="text-[10px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-400">
                            Klicken für Details
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Detail Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {"date" in (selectedItem || {}) ? (
                  <Target className="w-5 h-5 text-yellow-600" />
                ) : (
                  <Calendar className="w-5 h-5 text-blue-600" />
                )}
                {selectedItem?.title}
              </DialogTitle>
              <DialogDescription>
                {selectedItem?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {selectedItem && "deliverables" in selectedItem && selectedItem.deliverables && (
                <div>
                  <h4 className="font-semibold mb-2">Deliverables</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedItem.deliverables.map((deliverable, idx) => (
                      <li key={idx}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedItem && "category" in selectedItem && (
                <div className="flex gap-4">
                  <div>
                    <h4 className="font-semibold mb-1">Kategorie</h4>
                    <Badge>{selectedItem.category}</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Status</h4>
                    <Badge variant={selectedItem.status === "completed" ? "default" : "secondary"}>
                      {selectedItem.status === "completed" ? "Abgeschlossen" : 
                       selectedItem.status === "in-progress" ? "In Bearbeitung" : "Geplant"}
                    </Badge>
                  </div>
                </div>
              )}

              {selectedItem && "startDate" in selectedItem && (
                <div className="flex gap-4">
                  <div>
                    <h4 className="font-semibold mb-1">Startdatum</h4>
                    <p className="text-gray-700">{selectedItem.startDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enddatum</h4>
                    <p className="text-gray-700">{selectedItem.endDate}</p>
                  </div>
                </div>
              )}

              {selectedItem && "date" in selectedItem && (
                <div>
                  <h4 className="font-semibold mb-1">Datum</h4>
                  <p className="text-gray-700">{selectedItem.date}</p>
                </div>
              )}

              {selectedItem && "team" in selectedItem && selectedItem.team && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.team.map((member, idx) => (
                      <Badge key={idx} variant="outline">{member}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem && "dependencies" in selectedItem && selectedItem.dependencies && selectedItem.dependencies.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Abhängigkeiten</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedItem.dependencies.map((dep, idx) => (
                      <li key={idx}>{dep}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}