import React, { useState } from 'react';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

const App = () => {
  const onSubmit = username => console.log(username);
  return <UsernameForm onSubmit={onSubmit} />;
};

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <Input  
        value={username}  
        onChange={setUsername}
      >
        Your name:
      </Input>
      <Button
        style={{ backgroundColor: 'white' }}
        type={'submit'}
        onClick={() => console.log('submit')}
      >
        Send
      </Button>
    </Form>
  );
};

export default App;