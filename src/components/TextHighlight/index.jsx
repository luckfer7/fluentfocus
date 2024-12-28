export default function Span({ children, className, ...props }){
    return(
        <span className={` font-Raleway ${className}` } {...props}>{children}</span>
    )
}