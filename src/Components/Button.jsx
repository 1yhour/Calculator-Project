const Button = ({ value, onClick, isOperator, isAction, isDouble }) => {
    // Determine color based on button type
    let colorClass = "bg-gray-700 hover:bg-gray-600 text-white"; // Default Number

    if (isOperator) {
        colorClass = "bg-blue-600 hover:bg-blue-500 text-white"; // Operators (+, -, *)
    } else if (isAction) {
        colorClass = "bg-red-500 hover:bg-red-400 text-white"; // Actions (AC, DEL)
    }

    // Determine size (0 button is usually wider)
    const sizeClass = isDouble ? "col-span-2" : "";

    return (
        <button
            className={`${colorClass} ${sizeClass} p-4 rounded-xl text-xl font-bold transition-all active:scale-95 shadow-lg`}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
};

export default Button;