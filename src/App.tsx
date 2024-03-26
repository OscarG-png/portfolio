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


function App() {

  return (
    <>
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
    </>
  )
}

export default App
