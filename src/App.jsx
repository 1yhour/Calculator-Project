import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { calculatorButtons } from "./constants/buttonData"; // Import the array

function App() {
    const [displayValue, setDisplayValue] = useState("");
    const [expression, setExpression] = useState("");

    const handleButtonClick = (value) => {
        // ... (Keep your existing logic here, it doesn't change) ...
        if (value === "AC") {
            setDisplayValue("");
            setExpression("");
            return;
        }
        if (value === "DEL") {
            setDisplayValue(displayValue.slice(0, -1));
            return;
        }
        if (value === "=") {
            try {
                const formattedExpression = displayValue.replace(/×/g, "*").replace(/÷/g, "/");
                const result = eval(formattedExpression);
                setDisplayValue(String(result));
                setExpression(displayValue + " =");
            } catch {
                setDisplayValue("Error");
            }
            return;
        }
        if (value === "%") {
            try {
                const result = parseFloat(displayValue) / 100;
                setDisplayValue(String(result));
            } catch {
                setDisplayValue("Error");
            }
            return;
        }

        const lastChar = displayValue.slice(-1);
        const operators = ["+", "-", "×", "÷", "."];
        if (operators.includes(value) && operators.includes(lastChar)) return;

        setDisplayValue(displayValue + value);
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl w-full max-w-sm border border-gray-700">

                <Display value={displayValue} expression={expression} />

                {/* This is the new part: The Map Loop */}
                <div className="grid grid-cols-4 gap-3">
                    {calculatorButtons.map((btn) => (
                        <Button
                            key={btn.value} // React always needs a unique key for lists
                            value={btn.value}
                            onClick={handleButtonClick}
                            isOperator={btn.isOperator}
                            isAction={btn.isAction}
                            isDouble={btn.isDouble}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default App;