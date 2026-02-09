"use client"

export interface ModuleData {
  num: string
  title: string
  tool: string
  items: string[]
}

interface ModuleCardProps {
  mod: ModuleData
  isOpen: boolean
  onToggle: () => void
}

export function ModuleCard({ mod, isOpen, onToggle }: ModuleCardProps) {
  return (
    <div className="border-4 border-foreground">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-background hover:bg-secondary transition-colors"
      >
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <span className="font-sans font-black text-3xl md:text-4xl text-accent flex-shrink-0">
            {mod.num}
          </span>
          <div className="min-w-0">
            <h3 className="font-sans font-bold text-base md:text-xl uppercase leading-tight">{mod.title}</h3>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
              {mod.tool}
            </span>
          </div>
        </div>
        <span className="font-sans font-black text-2xl md:text-3xl flex-shrink-0 ml-2">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="border-t-4 border-foreground p-4 md:p-6 bg-secondary">
          <ul className="space-y-2.5 md:space-y-3">
            {mod.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 md:gap-3">
                <span
                  className="w-3 h-3 md:w-4 md:h-4 min-w-[0.75rem] md:min-w-[1rem] border-foreground mt-0.5 md:mt-1 block"
                  style={{ borderWidth: "3px" }}
                />
                <span className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
