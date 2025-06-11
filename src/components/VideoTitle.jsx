export default function VideoTitle({title, overview}) {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="py-6 text-lg w-1/4">{overview}</p>

          <div className="">
              <button className="bg-white text-black font-bold hover:opacity-50 p-3 px-10 text-xl rounded-lg cursor-pointer">
              ▶️ Play
              </button>
              <button className="mx-2 bg-gray-500 text-white font-bold p-3 px-10 text-xl opacity-80 hover:opacity-50 rounded-lg cursor-pointer">
              ℹ️ More info
              </button>
          </div>
    </div>
  )
}
