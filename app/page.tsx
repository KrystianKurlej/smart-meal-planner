'use client';

import React from "react";
import { MaterialIconThemeGoogle } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setPassword(e.target.value);
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential.user) {
                setEmail("");
                setPassword("");
                router.push("/app");
            } else {
                setError("Failed to log in. Please try again.");
            }
        } catch (error) {
            setError("Error: " + (error as Error).message);
        }
    };

    return (
        <main className="flex flex-col justify-center h-screen relative bg-stone-50 p-4 pb-32">
            <h1 className="text-4xl mb-8 text-center">
                Log in or sign up
            </h1>
            <form onSubmit={handleLogin}>
                <Input
                    className="w-full h-14 mb-2"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <Input
                    className="w-full h-14 mb-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                {error && (
                    <p className="mx-2 text-sm text-destructive">
                        {error}
                    </p>
                )}
                <Button type="submit" className="w-full mt-4">
                    Log In
                </Button>
            </form>
            <div className="flex items-center my-4 px-4">
                <hr className="flex-grow border-stone-200" />
                <span className="mx-4 text-sm text-stone-500">or</span>
                <hr className="flex-grow border-stone-200" />
            </div>
            <Button size="default" variant="secondary" className="w-full">
                <MaterialIconThemeGoogle />
                Log in with Google
            </Button>
            <Button size="default" variant="secondary" className="w-full mt-2" asChild>
                <Link href="/auth/register" title="Register">
                    Register
                </Link>
            </Button>
        </main>
    )
}