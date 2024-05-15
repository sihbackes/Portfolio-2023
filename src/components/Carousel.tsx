import {useState} from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'


interface props{
    slides: string[]
}
export const Carousel = ({slides}:props) => {

    let [current, setCurrent] = useState(0);
    let previousSlide = () => {
        if(current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if(current === slides.length -1) setCurrent(0);
        else setCurrent(current + 1)
    }
        return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-40"
            style={{
                transform:`translateX(-${current * 100}%)`
            }}>
                {slides.map((slide, i) =>{
                    return (
                        <img key={"image" + i} src={slide}/>
                    )
                })}

            </div>
            <div className='absolute top-0 h-full w-full justify-between items-center flex text-zinc-600 px-10 text-3xl'>
                <button onClick={previousSlide}>
                  <BsFillArrowLeftCircleFill/>
                </button>
                <button onClick={nextSlide}>
                  <BsFillArrowRightCircleFill/>
                </button>

            </div>
            <div className='absolute bottom-0 py-4 flex justify-center gap-2 w-full'>
                {slides.map((slide, i)=> {
                   return <div 
                   onClick={() => {
                    setCurrent(i)
                   }}
                   key={"circle"+ i}
                   className={`rounded-full w-3 h-3 cursor-pointer ${i == current? "bg-zinc-600" : "bg-zinc-400"}`}></div>
                })}

            </div>
        </div>
    )
}