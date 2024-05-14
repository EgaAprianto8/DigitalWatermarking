type propTypes = {
  title: string
  onClick?: () => void
}


const Button = ({title, onClick} : propTypes) => {
  return (
    <div>
      <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl" onClick={onClick}>
        <a className="place-self-center">{title}</a>
      </button>
    </div>
  )
}

export default Button
