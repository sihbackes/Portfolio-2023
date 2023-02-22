export const Banner = () => {
return(
  <section className="border-b border-gray-100 dark:border-zinc-600 relative">
    <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-0 -left-1  w-32 h-48 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-20 w-48 h-56 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    <div className="mx-auto py-10 md:py-32">
      <h3 className="font-roboto pb-6">Hi there,</h3>
      <h1 className="text-6xl font-nunito font-extrabold pb-6">I'm Simone Backes</h1>
      <h3 className="font-roboto text-lg">I'm a Front-end Developer. Welcome to my portfolio.</h3>
    </div>
  </section>
)
}