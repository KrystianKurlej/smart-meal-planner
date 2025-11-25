import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function RegisterSuccessView() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <BadgeCheck className="mb-4 text-lime-600 w-16 h-16" />
            <h1 className="text-4xl mb-4">Registration Successful!</h1>
            <p className="text-lg text-stone-700 max-w-xs">You can now log in with your&nbsp;credentials.</p>
            <Button className="mt-6 w-50" asChild>
                <Link href="/">
                    Sign in
                    <ArrowRight />
                </Link>
            </Button>
        </div>
    );
}