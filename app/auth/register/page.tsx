'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setConfirmPassword(e.target.value);
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError(true);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered:", userCredential.user);
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="flex flex-col h-screen relative bg-stone-50 p-4">
            <Button asChild variant="secondary" size="icon">
                <Link href="/">
                    <ArrowLeft />
                </Link>
            </Button>
            <h1 className="text-4xl mt-8 mb-2">
                Let&apos;s get started
            </h1>
            <p className="text-stone-600 mb-8">
                Create an account to continue.
            </p>
            <form onSubmit={handleRegister} className="flex-1 flex flex-col pb-4">
                <div className="flex-1">
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
                        aria-invalid={error}
                        required
                    />
                    <Input
                        className="w-full h-14"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        aria-invalid={error}
                        required
                    />
                    {error && (
                        <p className="mx-2 text-sm text-destructive">
                            Passwords do not match.
                        </p>
                    )}
                    <small className="block text-sm text-stone-500 m-2">
                        By registering, you agree to our Terms&nbsp;of&nbsp;Service and&nbsp;Privacy Policy.
                    </small>
                </div>
                <Button type="submit" size="lg" className="w-full mt-4">
                    Register
                </Button>
                <Button asChild variant="ghost" size="default" className="w-full mt-4" type="button">
                    <Link href="/auth/login">
                        Already have an account? Log in
                    </Link>
                </Button>
            </form>
        </div>
    )
}