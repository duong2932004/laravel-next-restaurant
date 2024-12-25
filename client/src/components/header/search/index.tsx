"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";

export default function Search() {
  const [onDown, setOnDown] = useState(false);

  return (
    <div className="relative w-64">
      <Command>
        <CommandInput
          placeholder="Type a command or search..."
          onFocus={() => setOnDown(true)}
          onBlur={() => setOnDown(false)}
          className="w-screen sm:w-ful"
        />
        {onDown && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white dark:bg-gray-800 rounded-md shadow-lg mt-1 w-screen sm:w-full">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
