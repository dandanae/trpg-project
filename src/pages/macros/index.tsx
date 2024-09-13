import {
  MacroCardButton,
  MacroMovie,
  MacroTitleCard,
  MacroImageHandout,
  MacroTextHandout,
  MacroTitleImage,
  MacroChapterSimple,
  MacroDialog,
  MacroDice,
} from '@/components/macros'
import { MacroMessage } from '@/components/macros/macro-massage'

const MacrosPage = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center w-full h-screen gap-10 p-10">
      <MacroCardButton route="/macro_title_card">
        <MacroTitleCard />
      </MacroCardButton>
      <MacroCardButton route="/macro_title_image">
        <MacroTitleImage />
      </MacroCardButton>
      <MacroCardButton route="/macro_chapter_simple">
        <MacroChapterSimple />
      </MacroCardButton>
      <MacroCardButton route="/macro_dice">
        <MacroDice />
      </MacroCardButton>
      <MacroCardButton route="/macro_dialog">
        <MacroDialog />
      </MacroCardButton>
      <MacroCardButton route="/macro_text_handout">
        <MacroTextHandout />
      </MacroCardButton>
      <MacroCardButton route="/macro_image_handout">
        <MacroImageHandout />
      </MacroCardButton>
      <MacroCardButton route="/macro_movie">
        <MacroMovie />
      </MacroCardButton>
      <MacroCardButton route="/macro_message">
        <MacroMessage />
      </MacroCardButton>
    </div>
  )
}

export default MacrosPage
