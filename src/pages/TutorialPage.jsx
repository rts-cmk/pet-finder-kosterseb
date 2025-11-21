import './TutorialPage.scss';

const TutorialPage = ({ onSkip }) => {
  return (
    <div className="tutorial-page">
      <div className="tutorial-background">
        <img src="/assets/tutorial-background.svg" alt="Tutorial" className="background-svg" />
      </div>
      
      <div className="tutorial-content">
        <h1>My Pets</h1>
        <p>Taking care of a pet is my favorite thing to do, it helps me to relief stress and fatigue.</p>
        
        <button className="skip-button" onClick={onSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default TutorialPage;