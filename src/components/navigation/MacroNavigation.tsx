import { useAtom } from 'jotai'
import {
  MacroDiceController,
  MacroTextHandoutController,
  MacroImageHandoutController,
  MacroTitleCardController,
  MacroTitleImageController,
  MacroChapterSimpleController,
  MacroDialogController,
  MacroMovieController,
  MacroMessageController,
} from '../macros'
import MacroNavigationButton from './MacroNavigationButton'
import { scriptMacroIndex } from '../scripts/ScriptAtoms'

const MacroNavigation = () => {
  const [macroIndex, setMacroIndex] = useAtom(scriptMacroIndex)
  return (
    <>
      <div className="absolute top-0 flex flex-col items-center justify-center w-16 max-h-full p-2 text-xs bg-white rounded-lg -left-20 bg-white/70 backdrop-blur-lg">
        <MacroNavigationButton icon="square" onClick={() => setMacroIndex(0)} />
        <MacroNavigationButton icon="splitscreen" onClick={() => setMacroIndex(1)} />
        <MacroNavigationButton icon="format_h1" onClick={() => setMacroIndex(2)} />
        <MacroNavigationButton icon="casino" onClick={() => setMacroIndex(3)} />
        <MacroNavigationButton icon="format_quote" onClick={() => setMacroIndex(4)} />
        <MacroNavigationButton icon="menu_book" onClick={() => setMacroIndex(5)} />
        <MacroNavigationButton icon="image" onClick={() => setMacroIndex(6)} />
        <MacroNavigationButton icon="movie" onClick={() => setMacroIndex(7)} />
        <MacroNavigationButton icon="chat_bubble" onClick={() => setMacroIndex(8)} />
        <MacroNavigationButton icon="close" onClick={() => setMacroIndex(undefined)} />
      </div>
      <div className="absolute top-0 flex items-center justify-center max-h-full rounded-lg w-[400px] -left-[496px]">
        {macroIndex === 0 && <MacroTitleCardController />}
        {macroIndex === 1 && <MacroTitleImageController />}
        {macroIndex === 2 && <MacroChapterSimpleController />}
        {macroIndex === 3 && <MacroDiceController />}
        {macroIndex === 4 && <MacroDialogController />}
        {macroIndex === 5 && <MacroTextHandoutController />}
        {macroIndex === 6 && <MacroImageHandoutController />}
        {macroIndex === 7 && <MacroMovieController />}
        {macroIndex === 8 && <MacroMessageController />}
      </div>
    </>
  )
}

export default MacroNavigation
