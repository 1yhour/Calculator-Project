const Display = ({ value, expression }) => {
    return (
        <div className="w-full bg-gray-900 rounded-t-xl p-6 mb-4 text-right shadow-inner">
            {/* Small top text showing previous expression (e.g., "12 + 5") */}
            <div className="text-gray-400 text-sm h-6 font-mono overflow-hidden">
                {expression}
            </div>
            {/* Main large text showing current input/result */}
            <div className="text-white text-5xl font-bold font-mono overflow-x-auto overflow-y-hidden scrollbar-hide">
                {value || "0"}
            </div>
        </div>
    );
};

export default Display;