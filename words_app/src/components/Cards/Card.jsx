import React, { useEffect, useRef, useState } from 'react';
import '../words';


export default function Card(props) {
    const [Flips, setFlip] = useState(false);
    const ref = useRef(null);

    const hadleClick = () => {
        setFlip(!Flips);
        props.considerWord();
    }

    useEffect(() => {
        ref.current.focus();
    })

    return (
        <div className='card'>
            <h2 className='card_txt'>Выучено слов :
                {
                    props.lerned
                }
            </h2>
            <div className='card_word'>
                <p className='card_en'> {props.english} </p>
                <p className='card_tr'> {props.transcription} </p>
                <button className="card_button" onClick={hadleClick} ref={ref}>  Проверь себя! </button>
            </div>
            {
                Flips &&
                <div className='card_word'>
                    <h2 className="card_russ" onClick={hadleClick}> {props.russian} </h2>
                </div>
            }
        </div>
    )
}