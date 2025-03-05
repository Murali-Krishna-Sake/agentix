import { useState } from 'react';

function App() {
  const [requestData, setRequestData] = useState({
    value: '',
    file: null,
  });

  const handleStateChange = (key, value) => {
    setRequestData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page on submit

    const form = new FormData();
    form.append('value', requestData.value); // Add text data
    if (requestData.file) {
      form.append('file', requestData.file); // Add file if exists
    }

    try {
      const response = await fetch(
        'https://67c870b90acf98d070869379.mockapi.io/agentix/chat',
        {
          method: 'POST',
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="base-page chat-page">
      <h1 className="welcome-title">Welcome to Agentix</h1>
      <p className="help-text">How can I help you today ?</p>
      <div className="conversation-container"></div>
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
          <button className="submit-btn" onClick={handleSubmit}>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </form>
      {requestData.file && `${requestData.file.name} has been attached.`}
    </div>
  );
}

export default App;
