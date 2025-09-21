export default function StyledCheckbox({ children, ...props}){
    return (
    <label className='checkbox'>
        <input
            type="checkbox"
            {...props}
        />
        <span className='checkmark'></span>
        {children}
    </label>
)}