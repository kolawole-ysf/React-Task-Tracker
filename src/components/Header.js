import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'Red' : 'Black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps={
  title: 'Routine Tracker'
}
export default Header
