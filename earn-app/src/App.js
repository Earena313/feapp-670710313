import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน) //ชื่อไฟล์ตั้งพิมพ์เล็ก/ใหญ่ก็ได้ แต่ชื่อ Component ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่
import Header from './components/Header';
import MovieList from './components/MovieLits';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

const students = [
  { name: 'Kulpreya',nickname: 'earn', major:'IT',favorites: ['music', 'flower'] },
  { name: 'Teerapong',nickname: 'ball', major:'IT',favorites: ['badminton', 'game'] },
  { name: 'Methaporn',nickname: 'mint', major:'IT',favorites: ['mhala', 'thai tea'] },
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
        <ProfileCard
          key={s.id}
          name={s.name}
          nickname={s.nickname}
          major={s.major}
          favorites={s.favorites}
        />
      ))}
    </div>


  );
}


export default App;
