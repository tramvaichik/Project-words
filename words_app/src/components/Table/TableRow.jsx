import React, { useState } from 'react';
import { useContext } from "react";
import { DataContext } from '../Context/ContextData';
import '../words';


export default function TableRow(props) {
    const [state, setState] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);
    const { dataWords } = useContext(DataContext);
    const [word, setWord] = useState({ ...dataWords });


    const handelChange = () => {
        setDisabledButton(false)
        setState(
            { isEdit: !state.isEdit }
        );
        setWord({ ...props })
    }


    const changeLine = (e) => {
        setWord({ ...word, [e.target.name]: e.target.value })
        if (e.target.value === '') {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }


    const onSave = (e) => {
        setState(
            { isEdit: !state.isEdit }
        );
        console.log("Сохранено!");
    }

    const updateWord = async (id) => {
        fetch(`/api/words/${id}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(word),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong ...");
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        state.isEdit ?
            <tr>
                <td><input className={disabledButton ? "empty-input" : "td_rus"} value={word.russian} name='russian' onChange={changeLine} /> </td>
                <td><input className={disabledButton ? "empty-input" : "td_en"} value={word.english} name='english' onChange={changeLine} /> </td>
                <td><input className={disabledButton ? "empty-input" : "td_tr"} value={word.transcription} name='transcription' onChange={changeLine} /> </td>
                <td>
                    <button className={disabledButton && "table_btn_ds"} data-id={props.id} onClick={() => { onSave(); updateWord(props.id); }} disabled={disabledButton}> &#10004; </button>
                    <button className="table_btn" data-id={props.id} onClick={handelChange}> &#10008; </button>
                </td>
            </tr>
            :
            <tr>
                <td className="td_rus"> {props.russian} </td>
                <td className="td_en"> {props.english}  </td>
                <td className="td_tr"> {props.transcription} </td>
                <td>
                    <button className="table_btn" data-id={props.id} onClick={handelChange}> &#10000; </button>
                </td>
            </tr>
    )
}