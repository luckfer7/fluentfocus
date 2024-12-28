export default function Footer ({ children, className, ...props }){
    return(
        <footer className={` font-Inter ${className}` } {...props}>{children}</footer>
    )
}