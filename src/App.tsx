import { Github } from "lucide-react";
import { Button  } from "./components/ui/button";

export function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="px-6 py-3 flex  items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido por Karoline Yamamoto</span>
        <Button variant="outline">
           <Github className="w-4 h-4 mr-2"/>
           Github
        </Button>
        </div>
      </div>
      <main className="bg-gray-500 flex-1 p-6">
          Hello Word!
      </main>
    </div>
  )
}