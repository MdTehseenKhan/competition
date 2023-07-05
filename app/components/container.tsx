interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`
        px-5
        md:px-10 
        lg:px-12
        2xl:container
        2xl:mx-auto 
        ${className ? className : ""}
      `}
    >
      {children}
    </div>
  )
}

export default Container
