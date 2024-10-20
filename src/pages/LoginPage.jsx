import DocumentTitle from '../components/DocumentTitle';
import AppSection from '../components/AppSection/AppSection';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login Page</DocumentTitle>
      <AppSection>
        <LoginForm />
      </AppSection>
    </>
  );
};

export default LoginPage;
