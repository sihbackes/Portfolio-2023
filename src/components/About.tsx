
export const About = () => {
  return(
    <main className="border-b border-gray-100 py-9 md:py-32">
      <div>
        <h3 className="font-roboto text-lg pb-7 font-bold" >About Me</h3>
        <div className="grid grid-col-1 md:grid-cols-3">
          <div className="grid-cols-1 md:col-span-2">
            <p className="font-roboto text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="grid-cols-1 mx-auto md:col-span-1">
            <img className="w-44 py-8 md:w-48 md:py-0 "  src="/src/assets/mypic.jpeg" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}