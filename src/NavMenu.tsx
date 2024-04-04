import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function NavMenu() {
    return (
        <div>
            <NavigationMenu className="gap-2">
                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink href="/">
                        <p>Home</p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink href="/aboutme">
                        <p>About me</p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <NavigationMenuTrigger>
                        <p>Projects</p>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <p>Contact</p>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    );
}
