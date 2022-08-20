import Image from "next/image";
import SlideGallery from "../../src/components/slideGallery";
import { getClassDetails, getClassesList } from "../../src/services/database";
import styles from "../../styles/Home.module.css";

function ClassDetails({ classDetails }: any) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Class Details</h1>

      <main className={styles.main}>
        <SlideGallery></SlideGallery>
        hello
        {classDetails.todays_workout}
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

export async function getStaticPaths() {
  const classList = await getClassesList();
  const paths = classList?.map((classes) => {
    return {
      params: { id: classes.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const classDetails = await getClassDetails(id);

  return {
    props: { classDetails },
  };
}

export default ClassDetails;
