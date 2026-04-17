import Multi from "./multi";
import { useTree } from "../customHook/hook";

const Display = () => {
  const { objData, addNode, delNode, editNode } = useTree();
  return (
    <div className="conatiner">
      <Multi
        data={objData}
        addNode={addNode}
        delNode={delNode}
        editNode={editNode}
      />
    </div>
  );
};

export default Display;
