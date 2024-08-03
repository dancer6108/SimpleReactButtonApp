import React, {useState} from "react";
import AddField from "./comp/AddField";
import TextFieldList from "./comp/TextFieldsList";
import './App.css';

function App() {
  const [FieldList, setFieldList] = useState([]);
  const addFieldHandler = (textData) => {
    setFieldList((prevFieldList) => {
      return [
        ...prevFieldList,
        { textData: textData, id: Math.random().toString() }
      ];
    });
  };
  return (
    <div>
      <AddField onAddField={addFieldHandler} />
      <TextFieldList textFields={FieldList} />
    </div>
  );
}

export default App;
