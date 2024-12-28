export default function TitleThree({ children, className, ...props }){
    return(
        <h3 className={` font-Raleway ${className}` } {...props}>
            {children}
        </h3>
    )
}