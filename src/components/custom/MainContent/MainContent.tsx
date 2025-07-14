import { InteractiveGridPattern } from "@/components/ui/interactiveGridPattern";
import { cn } from "@/lib/utils";

const MainContent = () => {
    return (
        <main className="flex-1">
            <section id="landing" className="min-h-100vh flex items-center justify-center">
                <InteractiveGridPattern
                    className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </section>
        </main>
    )
}

export default MainContent;