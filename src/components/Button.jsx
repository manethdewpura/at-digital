function Button({ children, onClick, type = "button", className = "", ...props }) {

return (
    <button
        type={type}
        onClick={onClick}
        className={` bg-secondary text-white text-[18px] py-[12px] px-[20px] gap-[8px] w-fit h-fit rounded-[4px] ${className}`}
        {...props}
    >
        {children}
    </button>
);
};

export default Button;
