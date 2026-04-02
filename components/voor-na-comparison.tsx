"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

type VoorNaComparisonProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function VoorNaComparison({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: VoorNaComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [positionPct, setPositionPct] = useState(50)
  const [dragging, setDragging] = useState(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    if (width <= 0) return
    const next = ((clientX - left) / width) * 100
    setPositionPct(Math.min(100, Math.max(0, next)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => setFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [dragging, setFromClientX])

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
    setDragging(true)
    setFromClientX(e.clientX)
  }

  const clipRight = 100 - positionPct

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[5/6] w-full overflow-hidden rounded-lg sm:rounded-md bg-card ring-1 ring-border/30 shadow-sm touch-none select-none",
        className,
      )}
    >
      {/* Na: volledige achtergrond */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        quality={80}
        draggable={false}
        className="object-cover pointer-events-none"
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 400px, 448px"
      />

      {/* Voor: zelfde kader, bovenop met clip — links = voor */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          quality={80}
          draggable={false}
          className="object-cover"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 400px, 448px"
        />
      </div>

      <span
        className="absolute top-2 left-2 z-[5] rounded px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm bg-background/95 text-muted-foreground ring-1 ring-border/60 pointer-events-none"
        aria-hidden
      >
        Voor
      </span>
      <span
        className="absolute top-2 right-2 z-[5] rounded px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm bg-secondary text-secondary-foreground pointer-events-none"
        aria-hidden
      >
        Na
      </span>

      {/* Sleepvlak + scheidingslijn */}
      <div
        className="absolute inset-0 z-10 cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-lg sm:rounded-md"
        onPointerDown={onPointerDown}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(positionPct)}
        aria-label="Sleep om voor en na te vergelijken"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault()
            setPositionPct((p) => Math.max(0, p - 5))
          } else if (e.key === "ArrowRight") {
            e.preventDefault()
            setPositionPct((p) => Math.min(100, p + 5))
          } else if (e.key === "Home") {
            e.preventDefault()
            setPositionPct(0)
          } else if (e.key === "End") {
            e.preventDefault()
            setPositionPct(100)
          }
        }}
      />

      <div
        className="absolute top-0 bottom-0 z-[11] w-0.5 bg-background/90 shadow-[0_0_12px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${positionPct}%`, transform: "translateX(-50%)" }}
        aria-hidden
      />
      <div
        className="absolute z-[12] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 text-foreground shadow-md ring-2 ring-secondary/80 pointer-events-none top-1/2"
        style={{ left: `${positionPct}%` }}
        aria-hidden
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" strokeWidth={2} />
      </div>

      <p className="absolute bottom-2 left-0 right-0 z-[5] text-center text-[10px] sm:text-xs text-primary-foreground/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] pointer-events-none">
        Sleep om te vergelijken
      </p>
    </div>
  )
}
