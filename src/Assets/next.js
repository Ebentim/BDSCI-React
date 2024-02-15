export const NavButtons = ({ children, classname, onclick = () => null, disable}) => {
    return <button onClick={onclick} className={classname} disabled = {disable}>{children}</button>
} 
