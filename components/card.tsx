import { cn } from "@/lib/utils"

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("md:rounded-xl bg-muted w-full p-8", className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
    return <h1 className={cn("text-xl font-bold", className)}>{children}</h1>
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
    return <p className={cn("text-sm", className)}>{children}</p>
}
