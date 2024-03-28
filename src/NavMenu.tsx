import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function NavMenu() {
    return(
        <div>
            <NavigationMenu>
                <NavigationMenuItem className="list-none">
                    <NavigationMenuTrigger>
                        <p>About me</p>
                    </NavigationMenuTrigger>
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
    )
}
