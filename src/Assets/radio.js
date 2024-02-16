export const RadioButton = ({question, option1, option2, option3, ida, idb, idc, check, onchange, name, classname, optionDiv, description}) =>{

    return(
        <>
            <p className={classname}>{question}</p>
            <div className={optionDiv}>
                <input type="radio" value={option1} name={name} checked={check} onChange={onchange} id = {ida}/>
                <label htmlFor={ida}>{option1}</label>
            </div>
            <div className={optionDiv}>
                <input type="radio" value={option2} name={name} checked={check} onChange={onchange} id={idb}/>
                <label htmlFor={idb}>{option2}</label>
            </div>
            <div className={optionDiv}>
                <input type="radio" value={option3} name={name} checked={check} onChange={onchange} id={idc}/>
                <label htmlFor={idc}>{option3}</label>
            </div>
            <p className="sectionQuote">{description}</p>
        </>
    )

    
}