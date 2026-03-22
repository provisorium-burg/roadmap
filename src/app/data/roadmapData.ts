import { RoadmapData } from "../components/types/roadmap";

export const roadmapData: RoadmapData = {
  projectTitle: "Provisorium – Hochschule als Reallabor für Nachhaltigkeit",
  duration: "März 2026 - Dezember 2027",
  phases: [
    {
      name: "Initiierung",
      quarter: "Q1",
      year: 2026,
      tasks: [
        {
          title: "Stakeholder-Analyse & Projektteam-Aufbau",
          description: "Identifikation und Einbindung aller Statusgruppen (Studierende, Lehrende, Verwaltung, Werkstätten, Mensateam, Bibliothek) von allen drei Standorten (Campus Design, Campus Kunst, Hermes-Gebäude). Aufbau eines interdisziplinären Kernteams.",
          category: "Governance",
          startDate: "2026-03",
          endDate: "2026-04",
          status: "planned",
          team: ["Projektteam", "Projektleiterin - Rektoratsprojekte", "Verwaltung", "Studierende"],
          deliverables: [
            "Stakeholder-Map aller Standorte",
            "Projektteam mit allen Statusgruppen",
            "Kommunikationsplan für drei Standorte"
          ]
        },
        {
          title: "Ist-Analyse & Bedarfsermittlung an allen Standorten",
          description: "Umfassende Analyse des Status Quo an Campus Design, Campus Kunst und Hermes-Gebäude. Einbeziehung von Werkstätten, Mensa, Bibliothek, Grün- und Freiflächen. Identifikation hochschul-spezifischer Handlungsfelder.",
          category: "Forschung",
          startDate: "2026-03",
          endDate: "2026-05",
          status: "planned",
          team: ["Lehre", "Studierende", "Werkstattleitende", "Mensapersonal"],
          deliverables: [
            "Standort-spezifische Ist-Analysen",
            "Bedarfsmatrix nach Statusgruppen",
            "Potenzialanalyse Werkstätten & Infrastruktur"
          ],
          dependencies: ["Stakeholder-Analyse abgeschlossen"]
        },
        {
          title: "Kick-off Veranstaltung",
          description: "Öffentliche Auftaktveranstaltung zur Vorstellung des Projekts und Aktivierung der Hochschulgemeinschaft.",
          category: "Community",
          startDate: "2026-04",
          endDate: "2026-04",
          status: "planned",
          team: ["Kommunikationsteam", "Eventmanagement"],
          deliverables: ["Event-Dokumentation", "Presseberichte"]
        }
      ],
      milestones: [        
        {
          title: "Projektstart",
          date: "2026-03",
          description: "Offizieller Start des Reallabor-Projekts"
        }
      ]
    },
    {
      name: "Konzeption",
      quarter: "Q2 - Q3",
      year: 2026,
      tasks: [
        {
          title: "Beteiligungskonzept & Verabschiedung Jahresthema",
          description: "Zentraler partizipativer Prozess zur Konzeption eines Jahresthemas unter breiter Beteiligung aller Hochschulangehörigen (Studierende, Lehrende, Verwaltung, Werkstätten, Mensateam, Bibliothek, Gärtnerei) von allen drei Standorten. Das Jahresthema dient als Leitlinie für alle Maßnahmen, Aktivitäten und Pilotprojekte des Reallabors.",
          category: "Governance",
          startDate: "2026-04",
          endDate: "2026-07",
          status: "planned",
          team: ["Alle Statusgruppen", "Projektteam", "Moderationsteam"],
          deliverables: [
            "Partizipativer Entwicklungsprozess mit allen Standorten",
            "Jahresthema formuliert und abgestimmt",
            "Beschluss in Vollversammlung"
          ]
        },
        {
          title: "Entwicklung Nachhaltigkeitsstrategie",
          description: "Erarbeitung einer ganzheitlichen Nachhaltigkeitsstrategie für die Hochschule mit konkreten Zielen und Maßnahmen.",
          category: "Governance",
          startDate: "2026-07",
          endDate: "2027-08",
          status: "planned",
          team: ["Strategieteam", "Externe Berater"],
          deliverables: [
            "Nachhaltigkeitsstrategie",
            "Zielkatalog",
            "Maßnahmenplan"
          ],
          dependencies: ["Ist-Analyse abgeschlossen"]
        },
        {
          title: "Konzeption Reallabor-Ansätze für bestehende Infrastruktur",
          description: "Entwicklung experimenteller Ansätze für Campus Design, Campus Kunst und Hermes-Gebäude: Integration in Werkstätten, Ateliers, Mensa, Bibliothek und Grünflächen. Entwicklung kunsthochschul-spezifischer Interventionsstrategien.",
          category: "Infrastruktur",
          startDate: "2026-04",
          endDate: "2026-07",
          status: "planned",
          team: ["Facility Management", "Werkstattleiter", "Bibliothek", "Verwaltung"],
          deliverables: [
            "Standort-spezifische Interventionskonzepte",
            "Werkstatt-Transformationspläne",
            "Grünflächen-Nutzungskonzept"
          ]
        },
        {
          title: "Konzept zur Pilotierung curricularer Verankerung von BNE",
          description: "Integration von Nachhaltigkeitsthemen in ausgewählten Studiengangsmodulen oder für einzelne Lehrveranstaltungen. Entwicklung projektbasierter Lehrformate mit Werkstatt- und Atelierbezug.",
          category: "Lehre",
          startDate: "2026-07",
          endDate: "2026-10",
          status: "planned",
          team: ["Lehrende Design", "Lehrende Kunst", "Lehrende Kunstpädagogik", "Studierende"],
          deliverables: [
            "Curriculum-Verankerung in ausgewählten Studiengangsmodulen oder für einzelne Lehrveranstaltungen",
            "Projektbasierte Lehrformate",
            "Werkstatt-Didaktik-Konzepte"
          ]
        },
        {
          title: "Forschungsprogramm Design",
          description: "Konzeption eines transdisziplinären Forschungsprogramms zu nachhaltiger Entwicklung.",
          category: "Forschung",
          startDate: "2026-07",
          endDate: "2026-09",
          status: "planned",
          team: ["Forschende", "Graduierte"],
          deliverables: [
            "Forschungsagenda",
            "Methodenhandbuch",
            "Partnerschaftsvereinbarungen"
          ]
        },
        {
          title: "Community-Engagement-Konzept",
          description: "Entwicklung eines Konzepts zur aktiven Einbindung von Studierenden, Mitarbeitenden und externen Partnern.",
          category: "Community",
          startDate: "2026-04",
          endDate: "2026-06",
          status: "planned",
          team: ["Community Manager", "Studierende"],
          deliverables: [
            "Engagement-Strategie",
            "Partizipationsformate",
            "Incentive-Modell"
          ]
        }
      ],
      milestones: [
        {
          title: "Ist-Analyse abgeschlossen",
          date: "2026-05",
          description: "Vollständige Bestandsaufnahme liegt vor"
        },
        {
          title: "🎯 Vollversammlung: Jahresthema verabschiedet",
          date: "2026-07",
          description: "Zentrale Vollversammlung mit allen Hochschulangehörigen zur demokratischen Verabschiedung des Jahresthemas. Dieses Jahresthema dient als Leitlinie für alle weiteren Maßnahmen und Aktivitäten des Reallabors."
        },
        {
          title: "Konzeptionsphase abgeschlossen",
          date: "2026-10",
          description: "Alle Konzepte finalisiert und freigegeben"
        },
        {
          title: "Strategie verabschiedet",
          date: "2027-08",
          description: "Nachhaltigkeitsstrategie vom Senat verabschiedet"
        }
      ]
    },
    {
      name: "Umsetzung",
      quarter: "Q2 2026 - Q3 2027",
   // year: 0,  Markierung, dass kein extra Jahr angehängt werden soll (2026 - 2027)
      tasks: [
        {
          title: "Transformation Werkstätten, Mensa & Grünflächen",
          description: "Nachhaltigkeitsinterventionen an allen drei Standorten: Beispielhafte Pilotmaßnahmen zur Umgestaltung der Werkstätten unter nachhaltigen Gesichtspunkten, Transformation der Mensa zu nachhaltigem Gastronomiebetrieb, Begrünung und ökologische Aufwertung der Freiflächen an Campus Design, Campus Kunst und Hermes-Gebäude.",
          category: "Infrastruktur",
          startDate: "2026-04",
          endDate: "2027-07",
          status: "planned",
          team: ["Werkstattleitende", "Mensateam", "Facility Management", "Studierende", "Gärtnerei"],
          deliverables: [
            "Nachhaltige Materialwirtschaft in Werkstätten",
            "Mensa mit regionalen Bio-Produkten",
            "Urbane Gärten & Grünflächen an allen Standorten"
          ],
          dependencies: ["Interventionskonzept entwickelt"]
        },
        {
          title: "Künstlerische Nachhaltigkeitsprojekte",
          description: "Start kunstbasierter Nachhaltigkeitsprojekte in Kooperation mit Studierenden und Lehrenden: Upcycling-Kunst, ökologische Installationen, partizipative Design-Projekte an allen drei Standorten.",
          category: "Lehre",
          startDate: "2026-05",
          endDate: "2027-07",
          status: "planned",
          team: ["Lehrende Kunst", "Lehrende Design", "Studierende", "Werkstätten"],
          deliverables: [
            "Mindestens 5 künstlerische Nachhaltigkeitsprojekte",
            "Öffentliche Ausstellungen an allen Standorten",
            "Dokumentation der Projekte"
          ]
        },
        {
          title: "Forschung zu Nachhaltigkeit in Kunst & Design",
          description: "Start transdisziplinärer Forschungsprojekte: Sustainable Design, Circular Economy in der Kunst, Material-Forschung, sozial-ökologische Transformation durch künstlerische Praktiken.",
          category: "Forschung",
          startDate: "2026-11",
          endDate: "2027-09",
          status: "planned",
          team: ["Forschende Design", "Forschende Kunst", "Praxispartner", "Studierende"],
          deliverables: [
            "Mindestens 3 Forschungsprojekte",
            "Publikationen & Ausstellungen",
            "Praxistransfer-Workshops"
          ]
        },
        {
          title: "Bibliothek als Nachhaltigkeits-Hub",
          description: "Transformation der Bibliothek zu einem Wissens- und Begegnungsort für Nachhaltigkeit: Aufbau Materialarchiv, Materialsammlung, Nachhaltigkeits-Literatur, Ausstellungsflächen, Workshopräume.",
          category: "Infrastruktur",
          startDate: "2027-01",
          endDate: "2027-05",
          status: "planned",
          team: ["Bibliothek", "IT-Entwicklung", "Studierende"],
          deliverables: [
            "Materialarchiv eröffnet",
            "Nachhaltigkeits-Sammlung erweitert",
            "Veranstaltungsreihe etabliert"
          ]
        },
        {
          title: "Hochschulweite Nachhaltigkeits-Aktivierungen",
          description: "Regelmäßige standortübergreifende Aktionen an Campus Design, Campus Kunst und Hermes-Gebäude: Repair Cafés, Tauschbörsen, Nachhaltigkeitswochen, Kleidertausch, künstlerische Interventionen im öffentlichen Raum.",
          category: "Community",
          startDate: "2026-04",
          endDate: "2027-10",
          status: "planned",
          team: ["Community Team", "Studierende", "AStA", "Verwaltung", "Werkstätten"],
          deliverables: [
            "Monatliche Aktionen an allen Standorten",
            "Partizipation >30% der Hochschulangehörigen",
            "Mediendokumentation"
          ]
        },
        {
          title: "Nachhaltigkeits-Monitoring etablieren",
          description: "Aufbau eines Monitoring-Systems zur kontinuierlichen Erfassung von Nachhaltigkeitskennzahlen.",
          category: "Governance",
          startDate: "2027-02",
          endDate: "2027-06",
          status: "planned",
          team: ["Controlling", "Datenanalyse"],
          deliverables: [
            "KPI-Dashboard",
            "Reporting-Prozesse",
            "Erstes Monitoring-Bericht"
          ]
        },
        {
          title: "Öffentlichkeitsarbeit & Kommunikation",
          description: "Kontinuierliche Kommunikation der Projekterfolge nach innen und außen, Social Media, Events.",
          category: "Kommunikation",
          startDate: "2026-04",
          endDate: "2027-09",
          status: "planned",
          team: ["Öffentlichkeitsarbeit", "PR"],
          deliverables: [
            "Quartalsweise Newsletter",
            "Social Media Präsenz",
            "Pressearbeit"
          ]
        }
      ],
      milestones: [
        {
          title: "Digitale Plattform live",
          date: "2026-04",
          description: "Launch der Nachhaltigkeitsplattform"
        },
        {
          title: "Erste Interventionen aktiv",
          date: "2026-05",
          description: "Experimentelle Interventionen in bestehenden Räumen gestartet"
        },
        {
          title: "Erste Forschungsergebnisse",
          date: "2027-07",
          description: "Präsentation erster Forschungsergebnisse auf Konferenz"
        }
      ]
    },
    {
      name: "Evaluation",
      quarter: "Q4",
      year: 2027,
      tasks: [
        {
          title: "Projekt-Evaluation durchführen",
          description: "Umfassende Evaluation aller Projektaktivitäten, Zielerreichung, Wirkungsanalyse und Lessons Learned.",
          category: "Forschung",
          startDate: "2027-10",
          endDate: "2027-11",
          status: "planned",
          team: ["Evaluation-Team", "Externe Evaluatoren"],
          deliverables: [
            "Evaluationsbericht",
            "Wirkungsanalyse",
            "Empfehlungskatalog"
          ]
        },
        {
          title: "Stakeholder-Feedback einholen",
          description: "Systematische Befragung aller Stakeholder-Gruppen zu Erfahrungen, Erfolgen und Verbesserungspotenzialen.",
          category: "Community",
          startDate: "2027-10",
          endDate: "2027-11",
          status: "planned",
          team: ["Community Team"],
          deliverables: [
            "Feedback-Report",
            "Zufriedenheitsanalyse"
          ]
        },
        {
          title: "Best Practice Dokumentation",
          description: "Aufbereitung erfolgreicher Ansätze und Methoden für Transfer und Skalierung.",
          category: "Kommunikation",
          startDate: "2027-11",
          endDate: "2027-12",
          status: "planned",
          team: ["Dokumentationsteam"],
          deliverables: [
            "Best Practice Guide",
            "Transfermaterialien",
            "Video-Dokumentation"
          ]
        }
      ],
      milestones: [
        {
          title: "Evaluation abgeschlossen",
          date: "2027-11",
          description: "Vollständige Projektevaluation liegt vor"
        }
      ]
    },
    {
      name: "Verstetigung",
      quarter: "Q3 - Q4",
      year: 2027,
      tasks: [
        {
          title: "Verstetigung-Strategie entwickeln",
          description: "Entwicklung einer Strategie zur langfristigen Verankerung von BNE in der Hochschulstruktur.",
          category: "Governance",
          startDate: "2027-07",
          endDate: "2027-09",
          status: "planned",
          team: ["Hochschulleitung", "Projektteam"],
          deliverables: [
            "Verstetigung-Konzept",
            "Finanzierungsplan",
            "Organisationsmodell"
          ],
          dependencies: ["Evaluation abgeschlossen"]
        },
        {
          title: "Folgeprojekte identifizieren",
          description: "Identifikation und Planung von Folgeprojekten und Weiterentwicklungen der wichtigsten Erkenntnisse des Projekts Provisorium.",
          category: "Forschung",
          startDate: "2027-08",
          endDate: "2027-10",
          status: "planned",
          team: ["Forschende", "Projektmanagement"],
          deliverables: [
            "Projektpipeline",
            "Förderanträge vorbereitet"
          ]
        },
        {
          title: "Abschlusskonferenz",
          description: "Große Abschlussveranstaltung zur Präsentation der Projektergebnisse und Vernetzung mit anderen Hochschulen.",
          category: "Community",
          startDate: "2027-12",
          endDate: "2027-12",
          status: "planned",
          team: ["Eventteam", "Alle Projektbeteiligten"],
          deliverables: [
            "Konferenz durchgeführt",
            "Proceedings veröffentlicht",
            "Netzwerk etabliert"
          ]
        }
      ],
      milestones: [
        {
          title: "Projektabschluss",
          date: "2027-12",
          description: "Offizieller Projektabschluss und Übergabe in Regelbetrieb"
        }
      ]
    }
  ]
};