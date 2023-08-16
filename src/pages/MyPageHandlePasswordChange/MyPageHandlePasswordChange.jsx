import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  ErrorMessage,
} from './MyPageHandlePasswordChange.styles';
import { Button } from '../../components/Button/Button.styled';
import { LargeInput } from 'components/Input/Input';

const PasswordChangeScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordMatch(false);
      return;
    }
  };

  return (
    <div style ={{backgroundColor: '#fff'}}>
      <Header>
        비밀번호 변경
      </Header>

      <FormContainer>
        
        <InputContainer>
          <LargeInput
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />
        </InputContainer>

        <InputContainer>
          <LargeInput
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={handleNewPassword}
          />
        </InputContainer>

        <InputContainer>
          <LargeInput
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />
          {!passwordMatch && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </InputContainer>

        
        <ButtonContainer>
          <Button type="button" onClick={handleSubmit}>
            확인
          </Button>
        </ButtonContainer>
      </FormContainer>
    </div>
  );
};

export default PasswordChangeScreen;
