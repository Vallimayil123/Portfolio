function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-[140px] rounded-full top-20 left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-[150px] rounded-full bottom-20 right-20"></div>

    </div>
  );
}

export default Background;