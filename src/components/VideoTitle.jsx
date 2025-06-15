export default function VideoTitle({title, overview}) {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[13%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-2xl md:pt-45 lg:text-5xl font-bold">{title}</h1>
          <p className="hidden md:inline-block py-6 text-lg md:w-1/2">{overview}</p>

          <div className="my-2 md:my-0">
              <button className="bg-white text-black font-bold hover:opacity-50 py-1 px-2 md:py-2 md:px-4 text-lg rounded-lg cursor-pointer">
              ▶️ Play
              </button>
              <button className="hidden md:inline-block mx-2 bg-gray-500 text-white font-bold py-2 px-4 text-lg opacity-80 hover:opacity-50 rounded-lg cursor-pointer">
              ℹ️ More info
              </button>
          </div>
    </div>
  )
}
