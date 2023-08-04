"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CopyCode({ pkg }: { pkg: string }) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          data-state={copied}
          className="group"
        >
          <Copy className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[state=true]:-rotate-90 group-data-[state=true]:scale-0" />
          <Check className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=true]:rotate-0 group-data-[state=true]:scale-100" />
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(`yarn add ${pkg}`)}>
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyToClipboard(`npm install ${pkg} --save`)}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(`pnpm add ${pkg}`)}>
          pnpm
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
