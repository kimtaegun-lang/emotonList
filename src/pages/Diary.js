import {useNavigate,useParams} from "react-router-dom";
import useDiary from "../hocks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { getFormattedDate } from "../util";
import Viewer from "../component/Viewer";
import {useEffect} from "react";
import { setPageTitle } from "../util";
const Diary = () => {
    const {id}=useParams();
    const data=useDiary(id);
   const navigate=useNavigate();
   const goBack =() => {
    navigate(-1);
   };

   const goEdit = () => {
    navigate(`/edit/${id}`);
   };

  useEffect(()=> {
        setPageTitle(`${id}번 일기`);
    },[]);

    if(!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    }
    else {
        const {date,emotionId,content}=data;
        const title=`${getFormattedDate(new Date(Number(date)))} 기록`;
 return (
    <div>
        <Header
        title={title}
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
        rightChild={<Button text={"수정하기"} onClick={goEdit}/>} />
        <div>{id}번 일기</div>
        <div>Diary 페이지 입니다.</div>
        <Viewer content={content} emotionId={emotionId}/>
    </div>
    )
    }
   
};
export default Diary;