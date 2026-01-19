export default function App() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <div className="text-center p-10 bg-white rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Tailwind is Working!
                </h1>
                <p className="text-gray-500 text-lg">
                    If you see this styled card, you are good to go.
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                    Click Me
                </button>
            </div>
        </div>
    )
}