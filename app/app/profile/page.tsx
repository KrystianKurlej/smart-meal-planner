'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push("/");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  }

  return (
    <>
      <header>
        <h1 className="text-4xl mt-8 mb-8">Profile</h1>
        <Avatar>
          <AvatarImage src="" alt="" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </header>
      <main className="border-t mt-6">
        <Button onClick={handleLogout} className="mt-8 mb-16 w-full" variant="secondary">
          Log Out
          <LogOut />
        </Button>
      </main>
    </>
  );
}