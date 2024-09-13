import { useRouter } from 'next/router'

interface MacroCardButtonProps {
  route: string
  children: React.ReactNode
}

const MacroCardButton = ({ route, children }: MacroCardButtonProps) => {
  const router = useRouter()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => router.push(route)}
        className="flex flex-col items-center justify-center p-5 transition-all duration-500 bg-white border border-dashed rounded-lg w-80 h-96 hover:rotate-3 border-primary"
      >
        {children}
      </button>
      <div className="absolute inset-0 w-full h-full rounded-lg -z-10 bg-primary" />
    </div>
  )
}

export default MacroCardButton
