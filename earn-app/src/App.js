
import './App.css';

import ProfileCard from './components/ProfileCard';


const members = [
  { id: 1, name: 'Kulpreya', nickname: 'earn', major: 'IT', favorites: ['music', 'flower'] },
  { id: 2, name: 'Teerapong', nickname: 'ball', major: 'IT', favorites: ['badminton', 'game'] },
  { id: 3, name: 'Methaporn', nickname: 'mint', major: 'IT', favorites: ['mhala', 'thai tea'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;