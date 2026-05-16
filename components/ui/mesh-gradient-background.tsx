"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
)

interface MeshGradientBackgroundProps {
  className?: string
  speed?: number
}

const LIGHT_COLORS = ["#FFFFFF", "#F0F0F0", "#E0E0E0", "#C8C8C8"]
const DARK_COLORS  = ["#0A0A0A", "#141414", "#1F1F1F", "#2A2A2A"]

export default function MeshGradientBackground({
  className,
  speed = 0.35,
}: MeshGradientBackgroundProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS

  return (
    <div
      className={cn("w-full h-full", className)}
      style={{ background: isDark ? "#0A0A0A" : "#FFFFFF" }}
    >
      <MeshGradient
        className="w-full h-full"
        colors={colors}
        speed={speed}
      />
    </div>
  )
}
