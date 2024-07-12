import CardWrapper from '@/components/auth/card-wrapper';

const LoginForm = () => {
  return (
    <>
      <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        Login From!
      </CardWrapper>
    </>
  );
};

export default LoginForm;
