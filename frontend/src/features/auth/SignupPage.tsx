import AuthLayout from "./components/AuthLayout";
import SignupForm from "./components/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start growing your Instagram with AI"
    >
      <SignupForm />
    </AuthLayout>
  );
}