import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน) //ชื่อไฟล์ตั้งพิมพ์เล็ก/ใหญ่ก็ได้ แต่ชื่อ Component ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่
import Header from './components/Header';
import MovieList from './components/MovieLits';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';


const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div>
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} /> //เอาไว้วนลูปแสดง Greeting ของนักศึกษาแต่ละคน (key เป็น id ของนักศึกษาเพื่อให้ React รู้จักแต่ละ Component ว่าเป็นคนละตัวกัน
      ))}
    </div>


  );
}


export default App;
