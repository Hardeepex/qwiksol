import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from './header.module.css';
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={`container ${styles.wrapper}`}>
        <nav class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li class={styles.navigationItem}>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              <span class={styles.navigationText}>Docs</span>
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              <span class={styles.navigationText}>Examples</span>
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              <span class={styles.navigationText}>Tutorials</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
