export default function TitleThree({ children, className, ...props }){
    return(
        <h3 className={` ${className}` } {...props}>
            {children}
        </h3>
    )
}