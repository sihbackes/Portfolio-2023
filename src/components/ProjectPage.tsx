import { Project } from "./Project"

export const ProjectPage = () => {
  return(
    <section className="border-b border-gray-100 md:py-32">
      <div>
        <h3 className="font-roboto text-lg pb-7" >Projects</h3>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </section>
  )
}