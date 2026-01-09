import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const today = new Date();
const weekday = today.getDay();

enum weekdays {
  'Monday',
  'Tuesday',
  'Wedensday',
  'Thuesday',
  'Friday',
  'Saturday',
  'Sunday'
}
const dayOfTheWeek: string = weekdays[weekday - 1];

function App() {
  return (
    <>
      <Header today={dayOfTheWeek} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
