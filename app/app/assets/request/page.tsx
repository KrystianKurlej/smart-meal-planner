import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function RequestAssetPage() {
    return (
        <>
        <Button asChild variant="secondary" size="icon">
            <Link href="/app/assets">
                <ArrowLeft />
            </Link>
        </Button>
        <header>
            <h1 className="text-4xl mt-8 mb-4">Request new asset</h1>
            <p className="text-stone-600">If you don&apos;t find the asset you need, you can request it here. We will review your request and add it to our collection as soon as possible.</p>
            <p className="mt-2 text-destructive">Feature coming soon...</p>
        </header>
        <main className="border-t mt-8 py-8">
            <form>
                <Input
                    placeholder="Asset name"
                    className="w-full mb-4"
                    type="text"
                />
                <Button type="submit" className="w-full">
                    Submit Request
                    <Send />
                </Button>
            </form>
        </main>
        </>
    )
}