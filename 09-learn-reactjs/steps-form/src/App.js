import { useState } from 'react';

const stepItems = ['Dream', 'Believe', 'Achive'];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step === 3) {
      // setStep((step) => step + 1)
      setStep(1);
      // setTest(stepItems[0]);
    } else {
      setStep(step + 1);
      // setTest(stepItems[step]);
      // Bad practice
      // test.name = 'Hello';
      // setTest({ name: 'Boy' });
    }
  }

  function handlePrev() {
    if (step === 1) {
      setStep(3);
      // setTest(stepItems[2]);
    } else {
      setStep(step - 1);
      // setTest(stepItems[step - 2]);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? 'active' : ''}>1</div>
            <div className={step === 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            {step}: {stepItems[step - 1]}
          </p>
          <div className="buttons">
            <button style={{ backgroundColor: '#526d82', color: '#ffffff' }} onClick={handlePrev}>
              Prev
            </button>
            <button style={{ backgroundColor: '#526d82', color: '#ffffff' }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
