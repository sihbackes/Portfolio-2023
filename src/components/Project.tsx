export const Project = () => {
  return(
    <div className="mb-20">
      <div className="flex justify-center">
      <h4 className="font-roboto pb-8">Project Name</h4>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <div className="col-span-2 flex justify-center bg-orange-200">
          <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg" alt="" />
        </div>
        <div className="col-span-2">
        <p className="font-roboto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className= "flex justify-center items-end h-24 ">
              <button className="h-10 w-40 mx-2 bg-slate-400 hover:bg-slate-500 rounded-full text-slate-50">Demo</button>
              <button className="h-10 w-40 mx-2 bg-slate-400 hover:bg-slate-500 rounded-full text-slate-50">Code</button>
            </div>
        </div>

      </div>
    </div>
  )
}