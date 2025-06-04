import Footer from "../components/footer";
import HomeNav from "../components/HomepageNav";
import LoginLayout from "../components/login/loginLayout";
import SignUpPage from "../components/signup/signup";

export default function Signup() {
  return (
    <>
      <HomeNav />
      <LoginLayout>
        <SignUpPage />
      </LoginLayout>
      <Footer />
    </>
  );
}
