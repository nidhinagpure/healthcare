
function Input({ type, placeholder, value, onchange, size, lable = "" }) {

    const SIZE_CLASSES = {
        sm: "text-sm py-2 px-2 rounded-sm mb-2",
        md: "text-md py-2 px-2 rounded-md mb-3",
        lg: "text-lg py-1 px-4 rounded-lg mb-4",
    }

    return (
        <div className="pt-10">
            {lable ? <lable>{placeholder}</lable> : null}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                  onchange(e.target.value);
                }}
                className={`text-md border-2 border-gray-300 w-70 focus-none outline-none ${SIZE_CLASSES[size]}`}
            />


        </div>
    ) 
}

export default Input