
type propTypes = {
  title: string;
  onClick?: () => void
}

const ButtonFull = ({ title, onClick } : propTypes) => {
  return (
      <button className="w-[100%] bg-theme py-2 rounded-md" onClick={onClick}>{title}</button>
  )
} 

export default ButtonFull
