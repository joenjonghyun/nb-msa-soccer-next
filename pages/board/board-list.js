import style from "common/style/table.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
const Table = ({ colspan, data}) =>{
    return (
        <table className={style.table}>
        <thead>
            <tr className={style.tr}>
                <th className={style.th}>게시판</th>
            </tr>
        </thead>
        <tbody>
                { data.length == 0 ?<tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>데이터가없습니다</td>
                                    </tr>
                :data.map((user)=>(
                <tr className={style.tr} key={user.passengerId}>
                <td className={style.td}>{user.title}</td>
                    </tr>
                ))}

        </tbody>
        </table>    
    )
}
export default function BoardList(){
    const [data, setData] = useState([])
    const count = data.length
    useEffect(() => {
        axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.Boards)
        }).catch(err=>{})
    },[])
    return(<>
        <h1>게시판리스트</h1>
        <div className={style.td}>
        <Table data = {data}/>
        </div>

        </>)
}