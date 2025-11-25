import { FlowbiteGoogleSolid } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="flex flex-col h-screen relative bg-stone-800">
            <Image
                src="/img/auth-background.png"
                alt="Logowanie"
                width={1242}
                height={2208}
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <header className="flex-1 text-center text-white flex flex-col justify-center items-center px-4">
                <h1 className="text-xl font-semibold">
                    Zacznij gotować z Smart Meal Planner
                </h1>
            </header>
            <main className="px-4 py-8">
                <Button size="lg" className="w-full">
                    <FlowbiteGoogleSolid />
                    Zaloguj się przez Google
                </Button>
                <Button size="lg" className="w-full mt-2" variant="secondary">
                    <Mail />
                    Zaloguj się przez e-mail
                </Button>
            </main>
        </div>
    )
}