import React from 'react';
import style from "common/style/table.module.css"
import { useState } from "react";
import Head from "next/head";
const Table = ({colspan, data}) => {
    return(
        <table className={style.table}>
            <thead>
                <tr className={style.tr}>
                    <th className={style.th}>할 일 목록</th>
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>일정이 없습니다</td>
                                    </tr>
                :data.map((todo) => (
                    <tr className={style.tr} key={todo.a}>
                        <td className={style.td} key={todo.a}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
export default function TodoList(){
    const [data, setData] = useState([])
    const count = data.length
    return(<>
        <Head>
            <title>Todo| 할일목록</title>
        </Head>
        <h1>할 일 목록</h1>
        <Table data = {data}></Table>
        </>)
    }