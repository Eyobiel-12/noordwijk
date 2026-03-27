import Image from "next/image"
import { cn } from "@/lib/utils"

const ALT = "Meubelstoffeerderij Noordwijk"

export type LogoVariant = "header-hero" | "header-solid" | "footer"

type LogoProps = {
  variant: LogoVariant
  className?: string
  priority?: boolean
}

export function Logo({ variant, className, priority }: LogoProps) {
  const isHero = variant === "header-hero"
  const isFooter = variant === "footer"

  const image = (
    <Image
      src="/noord.png"
      alt={ALT}
      width={280}
      height={88}
      priority={priority}
      className={cn(
        "w-auto object-contain object-left transition-[transform,opacity] duration-300",
        isHero && "h-8 sm:h-9 max-h-[2.35rem] sm:max-h-[2.6rem]",
        variant === "header-solid" && "h-8 sm:h-9 max-h-[2.35rem] sm:max-h-[2.6rem]",
        isFooter && "h-11 sm:h-[3.25rem] max-h-14"
      )}
    />
  )

  if (isHero) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-md bg-primary-foreground/[0.94] px-2.5 py-1.5 sm:px-3 sm:py-2",
          "shadow-[0_8px_30px_-8px_oklch(0.15_0.05_240_/_0.45)] ring-1 ring-primary-foreground/20",
          "group-hover:bg-primary-foreground group-hover:ring-primary-foreground/30",
          className
        )}
      >
        {image}
      </span>
    )
  }

  if (isFooter) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-md bg-background/10 px-2 py-2 ring-1 ring-background/15",
          className
        )}
      >
        {image}
      </span>
    )
  }

  return (
    <span className={cn("inline-flex items-center", className)}>{image}</span>
  )
}
