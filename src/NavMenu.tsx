import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Contact from './pages/Contact';

export default function NavMenu() {
    return (
        <div>
            <NavigationMenu className="gap-5">
                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink href="/" className="hover:underline">
                        <p>Home</p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none hover:underline">
                    <NavigationMenuLink href="/aboutme">
                        <p>About me</p>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none hover:underline">
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
