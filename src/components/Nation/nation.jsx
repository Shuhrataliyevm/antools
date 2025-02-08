// import "./nation.css";

// function Nation({ imageSrc, title, subtitle, description, icons, buttonText }) {
//     return (
//         <section className="nike">
//             <div className="nations">
//                 <div className="nation-image">
//                     <img src={imageSrc} alt={title} />
//                     <h4>{title} <br /><span>{subtitle}</span></h4>
//                 </div>
//                 <p>{description}</p>
//                 <div className="image">
//                     {icons.map((icon, index) => (
//                         <img key={index} src={icon} alt={`icon-${index}`} />
//                     ))}
//                     <button>{buttonText}</button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Nation;


import "./nation.css";

function Nation({ imageSrc, title, subtitle, description, icons, buttonText }) {
    return (
        <section className="nike">
            <div className="nations">
                <div className="nation-image">
                    <img src={imageSrc} alt={title} />
                    <h4>{title} <br /><span>{subtitle}</span></h4>
                </div>
                <p>{description}</p>
                <div className="image">
                    {icons.map((icon, index) => (
                        <img key={index} src={icon} alt={`icon-${index}`} />
                    ))}
                    <button>{buttonText}</button>
                </div>
            </div>
        </section>
    );
}

export default Nation;

