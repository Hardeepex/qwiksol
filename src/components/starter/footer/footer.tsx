import { component$, use } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = use(useServerTimeLoader);

  return (
    <footer>
      <div className="container">
        <a href="https://www.builder.io/" target="_blank" className={styles.anchor}>
          <span>Made with ♡ by Builder.io</span>
          <span className={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
