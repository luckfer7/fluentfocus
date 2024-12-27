export default function Question({ children, className, ...props }) {
    return(
        <p className={` ${className}` } {...props}>{children}</p>
    )
}