const scrollToTop = () => {
  return (
    <a href="#" className="z-50">
      <div
        className="
          w-12 
          h-12 
          fixed 
          bg-primary/50
          hover:bg-primary 
          text-white 
          text-xl 
          rounded-full 
          right-5 
          bottom-5 
          grid 
          place-items-center
          z-50
        "
      >
        ↑
      </div>
    </a>
  )
}

export default scrollToTop
