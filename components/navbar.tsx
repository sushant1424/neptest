"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="text-[20px] tracking-[0.2em] font-bold" style={{fontFamily:"var(--font-display)"}}>
            ANTIQUE NEPAL
          </Link>
        </div>
        <nav className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6 text-sm text-muted-foreground">
              <NavigationMenuItem>
                <Link href="#" className="hover:text-foreground">Shop</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" className="hover:text-foreground">Made in Nepal</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" className="hover:text-foreground">Stories</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" className="hover:text-foreground">Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search"><Search className="h-4 w-4"/></Button>
          <Button variant="ghost" size="icon" aria-label="User"><User className="h-4 w-4"/></Button>
          <Button variant="ghost" size="icon" aria-label="Cart"><ShoppingCart className="h-4 w-4"/></Button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            <Link href="#">Shop</Link>
            <Link href="#">Made in Nepal</Link>
            <Link href="#">Stories</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


