import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Demo</NavigationMenuTrigger>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
