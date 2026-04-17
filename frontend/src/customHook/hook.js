import { useState, useEffect } from "react";

const insertNode = (tree, id, nameVal, isFolder) => {
    return tree.map((node) => {
        if (node.id === id && node.isFolder) {
            const newNode = {
                id: Date.now(),
                isFolder,
                name: nameVal,
                items: isFolder ? [] : undefined,
            };
            return {
                ...node,
                items: [...(node.items || []), newNode],
            };
        }
        if (node.items) {
            return {
                ...node,
                items: insertNode(node.items, id, nameVal, isFolder),
            };
        }
        return node;
    });
};

const deleteNode = (tree, id) => {
    return tree
        .filter((node) => node.id !== id)
        .map((node) => {
            if (node.items) {
                return {
                    ...node,
                    items: deleteNode(node.items, id)
                }
            }
            return node;
        })
}

const updateNode = (tree, id, nameVal) => {
    return tree.map((node) => {
        if (node.id === id) {
            return {
                ...node,
                name: nameVal,
            }
        }
        if (node.items) {
            return {
                ...node,
                items: updateNode(node.items, id, nameVal)
            }
        }
        return node
    })
}

export const useTree = () => {
    const [objData, setObjData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("./sample.json");
            const data = await res.json();
            setObjData(data);
        };
        fetchData();
    }, []);

    const addNode = (id, nameVal, isFolder) => {
        setObjData((prev) => insertNode(prev, id, nameVal, isFolder));
    };

    const delNode = (id) => {
        setObjData((prev) => deleteNode(prev, id))
    }

    const editNode = (id, nameVal) => {
        setObjData((prev) => updateNode(prev, id, nameVal))
    }

    return { objData, addNode, delNode, editNode };
};