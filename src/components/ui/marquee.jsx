import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden sm:mt-16 mt-8 z-10 flex justify-center",
        className
      )}
      {...props}
    >
      <div className="relative flex w-full max-w-7xl overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
