export default function VideoTitle({title, overview}) {
  return (
    <div className="w-screen aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 text-base w-1/4">{overview}</p>

          <div className="">
              <button className="bg-white text-black font-bold hover:opacity-50 p-2 px-6 text-lg rounded-lg cursor-pointer">
              ▶️ Play
              </button>
              <button className="mx-2 bg-gray-500 text-white font-bold p-2 px-6 text-lg opacity-80 hover:opacity-50 rounded-lg cursor-pointer">
              ℹ️ More info
              </button>
          </div>
    </div>
  )
}
