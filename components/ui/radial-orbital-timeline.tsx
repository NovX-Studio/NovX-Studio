"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const ROTATION_SPEED = 0.18; // grados por frame a ~60fps ≈ ~10rpm
const RADIUS = 200;

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeRelated, setActiveRelated] = useState<Set<number>>(new Set());

  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const angleRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // RAF loop — más eficiente que setInterval y respeta el frame budget del navegador
  const tick = useCallback((timestamp: number) => {
    if (!autoRotate) return;
    const delta = timestamp - lastTimeRef.current;
    // Cap a 30fps máximo para ahorrar recursos
    if (delta > 33) {
      lastTimeRef.current = timestamp;
      angleRef.current = (angleRef.current + ROTATION_SPEED) % 360;
      setRotationAngle(angleRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [autoRotate]);

  useEffect(() => {
    if (autoRotate) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoRotate, tick]);

  // Pausar cuando la pestaña no está visible
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else if (autoRotate) rafRef.current = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [autoRotate, tick]);

  // Posiciones calculadas solo cuando cambia el ángulo — no re-calcula props no relacionadas
  const nodePositions = useMemo(() => {
    return timelineData.map((_, index) => {
      const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
      const radian = (angle * Math.PI) / 180;
      return {
        x: RADIUS * Math.cos(radian),
        y: RADIUS * Math.sin(radian),
        zIndex: Math.round(100 + 50 * Math.cos(radian)),
        opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))),
      };
    });
  }, [timelineData, rotationAngle]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setExpandedId(null);
      setActiveRelated(new Set());
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setActiveRelated(new Set());
      setAutoRotate(true);
    } else {
      setExpandedId(id);
      setAutoRotate(false);
      const item = timelineData.find((i) => i.id === id);
      setActiveRelated(new Set(item?.relatedIds ?? []));
      // Centrar la vista en el nodo seleccionado
      const idx = timelineData.findIndex((i) => i.id === id);
      const targetAngle = (idx / timelineData.length) * 360;
      angleRef.current = (270 - targetAngle + 360) % 360;
      setRotationAngle(angleRef.current);
    }
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed": return "text-white bg-black border-black";
      case "in-progress": return "text-black bg-white border-black";
      default: return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-[400px] md:h-[460px] flex items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        {/* Center core */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-accent via-accent-light to-accent-dim flex items-center justify-center z-10 pointer-events-none">
          <div className="absolute w-20 h-20 rounded-full border border-accent/20 animate-ping opacity-60" />
          <div className="absolute w-24 h-24 rounded-full border border-accent/10 animate-ping opacity-40" style={{ animationDelay: "0.7s" }} />
          <div className="w-8 h-8 rounded-full bg-white/80" />
        </div>

        {/* Orbit ring */}
        <div className="absolute w-96 h-96 rounded-full border border-accent/10 pointer-events-none" />

        {/* Nodes */}
        {timelineData.map((item, index) => {
          const pos = nodePositions[index];
          const isExpanded = expandedId === item.id;
          const isRelated = activeRelated.has(item.id);
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute transition-[transform,opacity] duration-500 cursor-pointer"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isExpanded ? 200 : pos.zIndex,
                opacity: isExpanded ? 1 : pos.opacity,
              }}
              onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
            >
              {/* Node button */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform
                  ${isExpanded
                    ? "bg-accent border-accent text-white scale-150 shadow-lg shadow-accent/30"
                    : isRelated
                    ? "bg-accent/20 border-accent text-white"
                    : "bg-bg-card text-text-primary border-accent/30 hover:border-accent"}`}
              >
                <Icon size={16} />
              </div>

              {/* Label */}
              <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider -translate-x-1/2 left-1/2 transition-colors duration-300
                ${isExpanded ? "text-accent" : "text-text-secondary"}`}>
                {item.title}
              </div>

              {/* Expanded card */}
              {isExpanded && (
                <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-60 bg-bg-card/95 backdrop-blur border-accent/20 shadow-xl shadow-accent/10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-accent/50" />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                        {item.status === "completed" ? "ACTIVO" : item.status === "in-progress" ? "EN CURSO" : "PRÓXIMO"}
                      </Badge>
                      <span className="text-[10px] font-mono text-text-secondary/60">{item.date}</span>
                    </div>
                    <CardTitle className="text-sm mt-2 text-text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-text-secondary">
                    <p>{item.content}</p>
                    <div className="mt-3 pt-3 border-t border-border-subtle">
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="flex items-center gap-1"><Zap size={9} /> Nivel</span>
                        <span className="font-mono text-accent">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-bg-elevated rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent-light" style={{ width: `${item.energy}%` }} />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border-subtle">
                        <div className="flex items-center mb-2 gap-1">
                          <Link size={9} className="text-text-secondary" />
                          <h4 className="text-[10px] uppercase tracking-wider font-medium text-text-secondary">Relacionados</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relId) => {
                            const rel = timelineData.find((i) => i.id === relId);
                            return (
                              <Button
                                key={relId}
                                variant="outline"
                                size="sm"
                                className="h-6 px-2 py-0 text-[10px] rounded-full border-accent/30 bg-transparent hover:bg-accent/10 text-text-secondary hover:text-accent"
                                onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                              >
                                {rel?.title}
                                <ArrowRight size={8} className="ml-1" />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
