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
    <div className="grid grid-cols-2">
      <NavigationMenu></NavigationMenu>
      <p>test</p>
    </div>
    </>
  )
}

export default App
