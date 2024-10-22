import React, { useState } from 'react';
import "./textcheck.css";
export const TextCheck = () => {  

    const [text, setText] = useState('');
    const [misspelledWords, setMisspelledWords] = useState([]);


    const handleChange = (e) => {
        const input = e.target.value;
        setText(input);
        checkSpelling(input);
    };

    return (
        <div className="grid-container">
            <div class="container">
                <textarea placeholder="Энд дарж бичнэ үү"></textarea>
                
                <div class="counts">
                    <div>Үгийн тоо: 0</div>
                    <div>Тэмдгийн тоо: 0/800</div>
                </div>
                
                <button className='check-button'>Аладааг шалгах</button>
                
                <div class="icon">
                    <img src="checkmark-icon.png" alt="Checkmark" />
                </div>
            </div>
            <div className="misspelled-word">
                <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Алдаатай үгс</h1>

            </div>
        </div>
        
      );
    
};
