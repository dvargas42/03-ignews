import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.buttonContainer}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" />
      <span>{session.user.name}</span>
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.buttonContainer}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      <span>Sign in with Github</span>
    </button>
  );
}
