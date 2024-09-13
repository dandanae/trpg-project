interface ContentSectionProps {
  children: React.ReactNode
}

const ContentSection = ({ children }: ContentSectionProps) => {
  return (
    <section
      aria-label="main-content-area"
      className="relative flex flex-col m-auto my-10 gap-5 w-[600px] h-[90dvh] p-5 transition-all duration-500 rounded-lg bg-white/70 backdrop-blur-lg under-tablet:w-full under-tablet:my-0 under-tablet:h-full"
    >
      {children}
    </section>
  )
}

export default ContentSection
