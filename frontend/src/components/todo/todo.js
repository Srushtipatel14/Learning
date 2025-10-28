const TODO = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-400">
            <div className="w-96 min-h-[450px] backdrop-blur-md bg-white/30 border border-white/20 shadow-2xl rounded-2xl p-6">
                <h1 className="text-center text-2xl font-semibold text-white mb-6 tracking-wide">My TODO List</h1>
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        className="border border-white/30 bg-white/40  rounded-lg outline-none p-2 flex-grow "
                    />
                    <button className="bg-white font-semibold rounded-lg px-4 py-2 shadow-md hover:bg-gray-100 active:scale-95 transition">
                        ADD
                    </button>
                </div>
                <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">
                    <div className="flex justify-between items-center bg-white/60 backdrop-blur-md rounded-lg p-3 shadow-md">
                        <div className="text-gray-800 font-medium">Learn React</div>
                        <div className="flex gap-2">
                            <button className="">✏️</button>
                            <button className="">🗑️</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TODO;
