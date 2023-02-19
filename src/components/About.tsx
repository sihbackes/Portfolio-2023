export const About = () => {
  return(
    <main className="border-b border-gray-100">
      <div className="px-10 md:px-44">
        <h3>About Me</h3>
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div>
            <img src="https://github.com/sihbackes.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}