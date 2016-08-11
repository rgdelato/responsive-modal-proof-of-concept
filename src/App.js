import React from 'react';
import { Link } from 'react-router';
import CustomModal from './CustomModal';
import logo from './logo.svg';
import './App.css';


const App = ({route}) => {
  const { modal1, modal2 } = route.data || {};

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>

      <div style={{padding: '20px', textAlign: 'left'}}>
        <p>NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.</p>
        <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
        <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
        <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
      </div>

      <div style={{display: 'inline-block', backgroundColor: '#1fa7bc', marginBottom: '20px', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
        <Link to="/modal1">Open a Modal</Link>
      </div>

      <CustomModal isOpen={modal1 || modal2}>
        {(modal1) ? (
          <div className="modal1">
            <h1>This is a modal!</h1>
            <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
            <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
            <p>The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.</p>
            <p><Link to="/modal2">Go to the next modal!</Link></p>
          </div>
        ) : (modal2) ? (
          <div className="modal2">
            <h1>Another modal, here!</h1>
            <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
            <p><Link to="/modal1">Go to the previous modal!</Link></p>
            <p><Link to="/">Close the modal</Link></p>
          </div>
        ) : null}
      </CustomModal>
    </div>
  );
};

export default App;
