import Head from "next/head"
import tableStyles from "../common/style/table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"
import Link from 'next/link'

const Table = ({columns, colSpan, data}) => {
    return(
        <table className={tableStyles.table}>
            <thead>
            <tr className={tableStyles.tr}  >
            {columns.map((column, index) => (
                  <th key={index} className={tableStyles.td}>{column}</th>
            ))}
          </tr>
            </thead>
            <tbody>
            { data.length == 0  ?<tr className={tableStyles.tr}>
            <td colSpan={colSpan} className={tableStyles.td}>게시글이 없습니다</td>
                    </tr>
                    :data.map((board)=> (
                        <tr className={tableStyles.tr} key={board.passengerId}>
                        <td className={tableStyles.td}>
                  
                  
                        <Link href={{pathname:`/board/[passengerId]`,
                                    query:{selectedUser: 'test'}}} as={`/board/${board.passengerId}`}>
                          <a>{board.passengerId}</a>
                        </Link> 
                      
                        
                      </td>
                            <td >{board.passengerId}</td>
                            <td >{board.name}</td>
                            <td >{board.teamId}</td>
                            <td >{board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default function BoardList(){
    const columns = ["글번호", "제목", "작성자", "주제"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/board/list').then(res=>{
        setData(res.data.Boards)
      }).catch(err=>{})
    },[])
    return(<>
        <h1>게시판목록</h1>
        <div className={tableStyles.td}>
        <Table columns={columns} colSpan={4} data={data}/>
        </div>
        </>)
}