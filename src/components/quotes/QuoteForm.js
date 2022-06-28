import { useRef, useState, Fragment} from 'react';
import {Prompt} from 'react-router-dom'; 
//This component will watch if we navigate away. And if a certain condition is met, it will show a warning before allowing us to leave.

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  const [focus, setFocus] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setFocus(true);
  };

  const finishFocusHandler = () => {
    setFocus(false);
  };

  return (
    <Fragment>
      <Prompt 
      when={focus} 
      message={
        (location) => 'Are you sure you want to leave? All your entered data will be lost.'}
      />
      <Card>
        <form 
        onFocus={formFocusHandler} 
        className={classes.form} 
        onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishFocusHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
