import { useEffect , useState } from "react";
import axios from "axios";
import style from "common/style/table.module.css"

const Table = ({columns, colspan, data}) => {
    return(
        <table className={style.table}>
        <thead>
            {/**<th key={column} className={style.td}>{column}</th> */}
            <tr className={style.tr}>
            {columns.map((column) => (
                <th key = {column} className={style.td}>{column}</th>
            ))}
        </tr>
        </thead>
        <tbody>
                { data.length == 0 ?<tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>데이터가없습니다</td>
                                    </tr>
                :data.map((board)=>(
                    <tr className={style.tr} key={board.passengerId}>
                        <td className={style.td}>{board.passengerId}</td>
                        <td className={style.td}>{board.name}</td>
                        <td className={style.td}>{board.teamId}</td>
                        <td className={style.td}>{board.subject}</td>
                        </tr>
                    ))}
        </tbody>
        </table>
    );
}
export default function BoradList(){
    const columns = ["passengerId","name", "teamId", "subject"]
    const [data, setData] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.board)
        }).catch(err=>{})
    }, [])
    return(<>
    <h1>게시판</h1>
    <div className={style.td}>
    <Table columns={columns} colspan={4} data = {data}/>
    </div>
    </>)
}