import LoginView from './view';
import { useLoginModel } from './view.model';

function Login() {
  const viewModel = useLoginModel();

  return (
    <LoginView 
      {...viewModel}
    />
  );
}

export default Login;
