import React from 'react';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

const FullForm = ({ username, setUsername }) => {
  const onSubmit = username => console.log(username);

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
      >
        Send
      </Button>
    </Form>
  );
};

export default FullForm;