export default function Section({ children, className, ...props }) {
    return(
        <section className={` ${className}` } {...props}>
            {children}
        </section>
    )
}

// className={` ${className}` } {...props}></section>