import React, { useState } from 'react';
import Card from './Card';
import Img from '../public/dictionary.jpeg';
import { DataContext } from '../Context/ContextData';
import { useContext } from "react";


export default function CardCoup(props) {
    const [position, setPosition] = useState(0);
    const { dataWords } = useContext(DataContext);
    const [words] = useState(dataWords);

    const handelPrev = () => {
        if (position === 0) {
            setPosition(words.length - 1);
        } else {
            setPosition(position - 1);
        }
    }

    const handelNext = () => {
        if (position === words.length - 1) {
            setPosition(0);
        } else {
            setPosition(position + 1);
        }
    }

    const [lerned, setLerned] = useState(0);

    const considerWord = () => {
        setLerned(lerned + 1)

    }

    return (
        <div className='coup'>
            <div className='coup_card'>
                <Card
                    key={words[position].id}
                    english={words[position].english}
                    transcription={words[position].transcription}
                    russian={words[position].russian}
                    tags={words[position].tags}
                    considerWord={considerWord}
                    lerned={lerned}
                />
                <div className='coup_btn'>
                    <button className='coup_button' onClick={handelPrev}> &lArr; </button>
                    <button className='coup_button' onClick={handelNext}> &rArr; </button>
                </div>
                <div className='coup_text'>
                    <h2 className='coup_txt'> {position + 1}/ {words.length}</h2>
                </div>
                <div className='coup_images'>
                    <img src={Img} className='coup_img' alt='dictionary' />
                </div>
            </div>
        </div>
    );
}