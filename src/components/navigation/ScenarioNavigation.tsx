interface ScenarioNavigationProps {
  values: {
    id: string
    label: string
    type: 'first' | 'second' | 'third' | 'forth' | 'fifth'
  }[]
}

const types = {
  first: 'p-2',
  second: 'p-2 pl-[15px]',
  third: 'p-2 pl-[30px]',
  forth: 'p-2 pl-[45px]',
  fifth: 'p-2 pl-[60px]',
} as const

const ScenarioNavigation = ({ values }: ScenarioNavigationProps) => {
  return (
    <div className="absolute top-0 max-h-full p-2 overflow-x-hidden overflow-y-auto text-xs bg-white rounded-lg -right-56 w-52 bg-white/70 backdrop-blur-lg">
      {values.map((value) => (
        <button
          key={value.id}
          type="button"
          onClick={() => document.getElementById(value.id)?.scrollIntoView({ behavior: 'smooth' })}
          className={`flex items-center w-full font-bold transition-colors duration-500 rounded-lg hover:text-tertiary hover:bg-tertiary/20 text-left
            ${types[value.type]}`}
        >
          {value.label}
        </button>
      ))}
    </div>
  )
}

export default ScenarioNavigation
