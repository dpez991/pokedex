export const Button = (
    {
        className = '',
        children
    }
)=>{
    return (
        <button className={['btn',className].join(' ')}>
            {children}
        </button>
    )
}