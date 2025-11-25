'use client'

import React from "react";
import RecipeList from "@/components/recipe-list";
import { Input } from "@/components/ui/input";
import { CircleX, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
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
      <form onSubmit={handleSearchSubmit} className="relative mb-4 flex-1">
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-stone-500" />
        <Input
          placeholder="Search recipe..."
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
      <RecipeList searchTerm={searchTerm} />
    </>
  );
}