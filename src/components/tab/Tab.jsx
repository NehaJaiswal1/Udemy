import React from 'react';
import '../styles.css'

function Tab({category, htmlValue, checked, setCurrentTab}) {
    const changeSetion = (tab) => {
        setCurrentTab(tab);
    }
    return ( 
        <label><input 
            type="radio" 
            value={htmlValue} 
            name="course-choice" 
            checked={checked}
            onChange={() => changeSetion(`${htmlValue}_res`)}/><span>{category}</span></label>
     );
}

export default Tab;