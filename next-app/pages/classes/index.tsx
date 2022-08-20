import Image from "next/image";
import ClassListCard from "../../src/components/classListCard";
import { getClassesList } from "../../src/services/database";
import { Classes } from "../../src/utils/entities";
import styles from "../../styles/Home.module.css";

function ClassList({ gymList }: any) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <main className={styles.main}>
        {gymList.map((gymList: Classes, i: number) => {
          return <ClassListCard gymList={gymList} key={i}></ClassListCard>;
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const gymList = await getClassesList();
  return {
    props: { gymList },
  };
}

export default ClassList;
