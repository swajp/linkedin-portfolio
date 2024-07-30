import { cn } from "@/lib/utils"

export default function MaxWidthWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("h-full mx-auto w-full max-w-screen-lg  md:px-20", className)}>{children}</div>
}
