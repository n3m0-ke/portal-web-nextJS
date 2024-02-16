import { Children } from "react"
import { SideNav } from "../ui/sidenav"

type Props = {
    children: React.ReactNode
  }

export default function PagesLayout({ children }: Props){
    return(
        <div>
            <div className="grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl max-w-2xl mx-auto">
                <header className="fixed desktop:w-72 tablet:w-20 bg-black rounded-lg transition-transform duration-300 border border-stone-700">
                    <div>
                        <SideNav />
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}