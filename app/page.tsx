import { FlowbiteGoogleSolid } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col h-screen relative bg-stone-200">
            <header className="flex-1 text-center flex flex-col justify-center items-center px-4">
                <h1 className="text-xl font-semibold">
                    Zacznij gotować z Smart Meal Planner
                </h1>
            </header>
            <main className="px-4 py-8">
                <Button size="lg" className="w-full">
                    <FlowbiteGoogleSolid />
                    Zaloguj się przez Google
                </Button>
                <Button size="lg" className="w-full mt-2" variant="secondary" asChild>
                    <Link href="/login" title="Zaloguj się przez e-mail">
                        <Mail />
                        Zaloguj się przez e-mail
                    </Link>
                </Button>
                <div className="flex items-center my-2">
                    <hr className="flex-grow border-stone-300" />
                    <span className="mx-2 text-sm text-stone-500">lub</span>
                    <hr className="flex-grow border-stone-300" />
                </div>
                <Button size="lg" variant="secondary" className="w-full mt-1" asChild>
                    <Link href="/auth/register" title="Zarejestruj się">
                        Zarejestruj się
                    </Link>
                </Button>
            </main>
        </div>
    )
}