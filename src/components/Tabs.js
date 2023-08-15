import React, {useState} from "react";


const Tabs = ({tabs}) => {
    const [content, setContent] = useState("");

    function displayContent(tab){
        setContent(tab.content);
    }

    return(

        <div>
            <ul>
                {
                    tabs.map((tab)=>
                        <li onClick={()=>displayContent(tab)}>{tab.title}</li>
                    )
                }
            </ul>
            {<p>{content}</p>}
        </div>
        
    )
}

export default Tabs;