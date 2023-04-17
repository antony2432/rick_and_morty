import FormLogin from "../../components/FormLogin";
import "./style.css";

export default function Login({ login }) {
  return (
    <main>
      <FormLogin login={login} />
    </main>
  );
}
