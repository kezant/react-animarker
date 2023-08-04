import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bug, FileText, Menu, PackageOpen } from "lucide-react";

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="absolute top-8 left-8">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>react-animarker</SheetTitle>
          <SheetDescription>
            a remarkable component for your content
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ul className="mt-10 flex flex-col gap-4">
            <li>
              <Link
                href="/docs"
                className="flex items-center gap-10 rounded-md border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <FileText /> Docs
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/kezant/react-animarker"
                className="flex items-center gap-10 rounded-md border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <PackageOpen /> Contributing
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kezant/react-animarker"
                className="flex items-center gap-10 rounded-md border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Bug /> Issues
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
