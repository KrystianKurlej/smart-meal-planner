'use client';

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <>
      {/* Tu będzie jakiś skeleton/placeholder/zdjęcie */}
      </>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
