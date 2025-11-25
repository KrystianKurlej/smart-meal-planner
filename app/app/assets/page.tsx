'use client';

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { CirclePlus, CircleX, Plus, Search } from "lucide-react";
import React from "react";
import ingredients from "@/db/ingredients.json";

export default function AssetsPage() {
  const [inputSearchTerm, setInputSearchTerm] = React.useState<string>("");
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchTerm(e.target.value);
  };

  const handleClearInputSearchTerm = () => {
    setInputSearchTerm("");
    setSearchTerm("");
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputSearchTerm);
  };

  return (
    <>
    <header>
      <h1 className="text-4xl mt-8 mb-4">Your assets</h1>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <CirclePlus />
            Add New Asset
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[85vh]">
          <div className="w-full h-full flex flex-col">
            <DrawerHeader>
              <DrawerTitle className="hidden">Add New Asset</DrawerTitle>
              <DrawerDescription>Add a new asset to your collection.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 flex flex-col flex-1 overflow-hidden">
              <form onSubmit={handleSearchSubmit} className="relative mb-4">
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <Input
                  placeholder="Search asset..."
                  className="w-full h-12 px-10"
                  value={inputSearchTerm}
                  onChange={handleSearchChange}
                  type="text"
                />
                <Button
                  type="button"
                  size="icon-lg"
                  className={`absolute top-1/2 right-1 -translate-y-1/2 ${!inputSearchTerm && 'opacity-0 pointer-events-none'}`}
                  variant="ghost"
                  onClick={() => {handleClearInputSearchTerm()}}
                >
                  <CircleX className="w-5 h-5 text-stone-500" />
                </Button>
              </form>
              <ul className="flex-1 overflow-y-auto pb-12 border-t pt-2">
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id} className="flex items-center justify-between mb-2 pb-2 border-b">
                    {ingredient.name}
                    <Button variant="outline" size="icon">
                      <Plus />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
    <main className="border-t mt-6">
      <p className="py-8 text-center text-stone-500">No assets added yet.</p>
    </main>
    </>
  );
}