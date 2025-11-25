'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function RegisterPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("🚀 ~ handleRegister ~ email:", email)
        console.log("🚀 ~ handleRegister ~ password:", password)

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
        <div className="flex flex-col h-screen relative bg-stone-100 p-4">
            <form onSubmit={handleRegister}>
                <Input
                    className="w-full h-14 mb-2"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <Input
                    className="w-full h-14"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <Button type="submit" className="w-full h-14 mt-4">
                    Register
                </Button>
            </form>
        </div>
    )
}