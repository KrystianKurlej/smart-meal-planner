'use client';

import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import RegisterForm from "./register-form";
import RegisterSuccessView from "./success-view";

export default function RegisterPage() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const [registrationSuccess, setRegistrationSuccess] = React.useState<boolean>(false);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredential.user) {
                setRegistrationSuccess(true);
            } else {
                setError("Failed to register. Please try again.");
            }
        } catch (error) {
            setError("Error: " + (error as Error).message);
        }
    };

    return (
        <main className="flex flex-col h-screen relative bg-stone-50 p-4">
            {registrationSuccess ? (
                <RegisterSuccessView />
            ) : (
                <RegisterForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    error={error}
                    setError={setError}
                    handleRegister={handleRegister}
                />
            )}
        </main>
    )
}