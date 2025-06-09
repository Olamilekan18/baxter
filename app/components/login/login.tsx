import LoginForm from "./form";
import LoginLayout from "./loginLayout";
import FormSection from "@/app/components/login/subComponet/formSection";
export default function LoginPage() {
  return (
    <LoginLayout>
      <LoginForm>
        <FormSection />
      </LoginForm>
    </LoginLayout>
  );
}
