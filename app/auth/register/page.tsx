'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress"

export default function RegisterPage() {
    const [registerStep, setRegisterStep] = React.useState<number>(0);

    const handleStepChange = (value: number) => {
        setRegisterStep(value);
    }

    return (
        <div className="flex flex-col h-screen relative bg-stone-100">
            <header className="px-4 mb-8 mt-16">
                <Progress value={Math.round((registerStep / 3) * 100)} />
                <h2 className="text-3xl mt-8">
                    {registerStep === 0 && "What's your email address?"}
                    {registerStep === 1 && "Set a password"}
                    {registerStep === 2 && "Confirm your password"}
                    {registerStep === 3 && "You're all set!"}
                </h2>
            </header>
            <main className="px-4 flex-1">
                <form className="flex flex-col gap-4">
                    <Input
                        className={`w-full h-14 ${registerStep !== 0 ? 'hidden' : ''}`}
                        type="email"
                        placeholder="Email address"
                        required
                    />
                    <Input
                        className={`w-full h-14 ${registerStep !== 1 ? 'hidden' : ''}`}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <Input
                        className={`w-full h-14 ${registerStep !== 2 ? 'hidden' : ''}`}
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                </form>
            </main>
            <nav className="px-4 mb-8 flex justify-end">
                {registerStep > 0 &&
                    <Button
                        type="button"
                        size="icon-lg"
                        variant="secondary"
                        onClick={() => handleStepChange(registerStep - 1)}
                        className="mr-4"
                    >
                        <ArrowRight className="rotate-180" />
                    </Button>
                }
                {registerStep < 3 &&
                    <Button
                        type="button"
                        size="icon-lg"
                        onClick={() => handleStepChange(registerStep + 1)}
                    >
                        <ArrowRight />
                    </Button>
                }
            </nav>
        </div>
    )
}