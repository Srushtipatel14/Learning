import React, { useState, useRef, useEffect } from "react";

const Multi = ({ data, addNode, delNode, editNode }) => {
    const [visibleMap, setVisibleMap] = useState({});
    const [inputVal, setInputVal] = useState("");
    const [activeFolder, setActiveFolder] = useState(null);
    const inputRef = useRef(null);

    const toggle = (id) => {
        setVisibleMap((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setActiveFolder(null);
                setInputVal("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div style={{ padding: "5px" }}>
            {data?.map((item) => (
                <div key={item.id} onClick={toggle}>
                    {item.isFolder ? (
                        <>
                            <div className="design" onClick={() => toggle(item.id)}>
                                <span>📁 {item.name}</span>
                                <div className="btn">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveFolder({ id: item.id, isFolder: true, isEdit: false });
                                        }}
                                    >
                                        ➕ Folder
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveFolder({ id: item.id, isFolder: false, isEdit: false });
                                        }}
                                    >
                                        ➕ File
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            delNode(item.id);
                                        }}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveFolder({ id: item.id, isFolder: true, isEdit: true });
                                            setInputVal(item.name)
                                        }}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            {activeFolder?.id === item?.id && (
                                <input
                                    ref={inputRef}
                                    value={inputVal || ""}
                                    autoFocus
                                    onChange={(e) => {
                                        setInputVal(e.target.value);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && inputVal !== "") {
                                            if (activeFolder.isEdit) {
                                                editNode(activeFolder.id, inputVal)
                                            }
                                            else {
                                                addNode(activeFolder.id, inputVal, activeFolder.isFolder);
                                            }
                                            setInputVal("");
                                            setActiveFolder(null);
                                        }
                                    }}
                                />
                            )}
                            {visibleMap[item.id] && item.items && item.items.length > 0 && (
                                <Multi
                                    data={item.items}
                                    addNode={addNode}
                                    delNode={delNode}
                                    editNode={editNode}
                                />
                            )}
                        </>
                    ) : (
                        <div className="design">
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <span>🗄 {item.name}</span>
                                {activeFolder?.id === item?.id && (
                                    <input
                                        ref={inputRef}
                                        value={inputVal || ""}
                                        autoFocus
                                        onChange={(e) => {
                                            setInputVal(e.target.value);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && inputVal !== "") {
                                                if (activeFolder.isEdit) {
                                                    editNode(activeFolder.id, inputVal)
                                                }
                                                else {
                                                    addNode(activeFolder.id, inputVal, activeFolder.isFolder);
                                                }
                                                setInputVal("");
                                                setActiveFolder(null);
                                            }
                                        }}
                                    />
                                )}
                            </div>
                            <div className="btn">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        delNode(item.id);
                                    }}
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveFolder({ id: item.id, isFolder: false, isEdit: true });
                                        setInputVal(item.name)
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Multi;
