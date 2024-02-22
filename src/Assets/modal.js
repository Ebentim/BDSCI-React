import "../styles/general.css"
export const Modal = ({children})=>{
    return(
        <div className="overLay">
            {children}
        </div>
    )
}