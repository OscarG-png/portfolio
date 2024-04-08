import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Contact from './pages/Contact';

export default function NavMenu() {
    return (
        <div>
            <NavigationMenu className="gap-5">
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
                    <NavigationMenuLink href="/projects">
                        <p>Projects</p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <Contact />
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    );
}
