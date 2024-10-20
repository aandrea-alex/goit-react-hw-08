import DocumentTitle from '../components/DocumentTitle';
import AppSection from '../components/AppSection/AppSection';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <DocumentTitle>Register Page</DocumentTitle>
      <AppSection>
        <RegisterForm />
      </AppSection>
    </div>
  );
};

export default RegisterPage;
