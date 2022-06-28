import { useState } from "react";

function App() {
    const [items, setItems] = useState(["thing 1", "thing 2"]);

    function addItem() {
        setItems([...items, `thing ${items.length + 1}`]);
    }

    const content = items.map((item) => (
        <div className="item" key={item}>
            {item}
        </div>
    ));
    return (
        <div className="container">
            <button onClick={addItem}> Add item </button>
            {content}
        </div>
    );
}

export default App;
