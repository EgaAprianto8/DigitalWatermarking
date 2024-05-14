
const ReceiveNews = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[200px] bg-theme gap-6 mt-20">
      <h4 className="text-white">To receive our latest news</h4>
      <div className="flex justify-center items-center w-[250px] md:w-[400px] h-[40px] md:h-[60px] rounded-full">
        <div className="flex justify-center items-center w-[80%] h-full bg-white text-gray-500 rounded-l-full text-base sm:text-lg xl:text-xl">
          Enter Email
        </div>
        <div className="w-[20%] h-full bg-[#0c7c95] rounded-r-full text-white flex justify-center items-center text-base sm:text-lg xl:text-xl">
          Go
        </div>
      </div>
    </div>
  )
}

export default ReceiveNews
