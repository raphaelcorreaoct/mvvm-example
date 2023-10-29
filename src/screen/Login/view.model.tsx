import { useState } from "react";

export const useLoginModel = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação, como enviar os dados para um servidor ou verificar em um banco de dados local.
    console.log(`Email: ${email}, Senha: ${password}`);
  };


  return {
    handleSubmit,
    handlePasswordChange,
    handleEmailChange,
    email, 
    password,
  }


}