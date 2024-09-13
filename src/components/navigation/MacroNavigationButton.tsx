import { useState } from 'react'

interface MacroNavigationButtonProps {
  icon: string
  onClick: () => void
}

const MacroNavigationButton = ({ icon, onClick }: MacroNavigationButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative w-full h-full p-2 transition-all duration-500 rounded-lg hover:bg-tertiary/20 hover:text-tertiary"
    >
      <span className="material-symbols-rounded select-none">{icon}</span>
    </button>
  )
}

export default MacroNavigationButton
