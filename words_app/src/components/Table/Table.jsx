import React from "react";
import { DataContext } from '../Context/ContextData';
import TableRow from "./TableRow";
import { useContext } from "react";



export default function Table() {
    const { dataWords } = useContext(DataContext);

    return (
        <div className='table'>
            <div className="table_header">
                <table className="table_row">
                    <tbody>
                        <tr>
                            <td className="head"><h2 className="header_rus"> Русский</h2></td>
                            <td className="head"><h2 className="header_en">Английский</h2></td>
                            <td className="head"><h2 className="header_tr">Транскрипция</h2></td>
                        </tr>
                        {
                            dataWords.map((word) =>
                                <TableRow
                                    key={word.id}
                                    {...word} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}