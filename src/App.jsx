import axios from 'axios';
import { useState } from 'react';
import Step from './components/elements/Step';
import stepsConstants from './constants/StepsConstants';

function App() {
  const [requestData, setRequestData] = useState({
    value: '',
    file: null,
  });

  const [hasError, setHasError] = useState(false);

  const [responseData, setResponseData] = useState([]);

  const handleStateChange = (key, value) => {
    if (key === 'file' && !!value) {
      setHasError(false);
    }
    setRequestData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (requestData.file === null) {
    //   setHasError(true);
    //   return;
    // }

    const form = new FormData();
    form.append('value', requestData.value);
    if (requestData.file) {
      form.append('file', requestData.file);
    }

    try {
      if (responseData.length) {
        setResponseData([]);
      }
      stepsConstants.forEach((step, index) => {
        setTimeout(() => {
          setResponseData((prevData) => [...prevData, step]);
        }, index * 3000);
      });

      setTimeout(async () => {
        const url = import.meta.env.VITE_WEBHOOK_URL;
        await axios.post(
          url,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }, 3 * 3000);
    } catch (error) {
      console.error('Error:', error);
    }

    setRequestData({
      file: null,
      value: '',
    });
  };

  return (
    <div className="base-page chat-page">
      {!responseData.length && (
        <>
          <h1 className="welcome-title">Welcome to Agentix</h1>
          <p className="help-text">How can I help you today ?</p>
        </>
      )}
      <div
        className={`conversation-container ${responseData.length ? 'open' : ''}`}
      >
        {responseData.length ? (
          <>
            <div className="steps-container">
              <h1 className="steps-title">
                {stepsConstants.length === responseData.length
                  ? 'Process Completed'
                  : 'Processing request'}
              </h1>
              {responseData.map((item) => (
                <Step stepData={item} key={item.title} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <form className="chat-input-container">
        <textarea
          type="text"
          className="chat-input"
          rows={4}
          onChange={(e) => handleStateChange('value', e.target.value)}
        />

        <div className="btns-container">
          <label htmlFor="uploaded-file" className="upload-file-btn">
            <input
              type="file"
              id="uploaded-file"
              name="uploaded-file"
              accept=".xls,.xlsx"
              maxLength="1"
              onChange={(e) => handleStateChange('file', e.target.files[0])}
            />
            <span className="material-symbols-outlined">upload</span> Upload
          </label>
          {requestData.file && (
            <span className="attachment-name">
              {requestData.file.name} has been attached
            </span>
          )}
          <button className="submit-btn" onClick={handleSubmit}>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
        {hasError && (
          <span className="error-text">
            <span class="material-symbols-outlined">error</span>
            Attachement required before submitting the request
          </span>
        )}
      </form>
    </div>
  );
}

export default App;
