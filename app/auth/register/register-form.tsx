import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface RegisterFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    error: string;
    setError: (error: string) => void;
    handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function RegisterForm({
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    handleRegister
}: RegisterFormProps) {
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setConfirmPassword(e.target.value);
    }

    return (
        <>
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
                    aria-invalid={error ? "true" : "false"}
                    required
                />
                <Input
                    className="w-full h-14"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    aria-invalid={error ? "true" : "false"}
                    required
                />
                {error && (
                    <p className="mx-2 text-sm text-destructive">
                        {error}
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
                <Link href="/">
                    Already have an account? Log in
                </Link>
            </Button>
        </form>
        </>
    )
}