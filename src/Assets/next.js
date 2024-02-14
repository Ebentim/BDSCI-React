export const NavButtons = ({ children, classname, onclick = ()=> null}) => {
    return <button onClick={onclick} className={classname}>{children}</button>
} 
