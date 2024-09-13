import AccordionBase from './AccordionBase'

interface SectionAccordionProps {
  id: string
  label: string
  children: React.ReactNode
}

const SectionAccordion = ({ id, label, children }: SectionAccordionProps) => {
  return (
    <AccordionBase id={id} type="section" label={`✨${label}✨`}>
      {children}
    </AccordionBase>
  )
}
export default SectionAccordion
