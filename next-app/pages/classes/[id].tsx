import { getClassesList } from "../../src/services/classes.api";

function ClassDetails({ classDetails }: any) {
  return "class details";
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

// export async function getStaticProps(context: any) {
//   const id = context.params.id;
//   const classDetails = await getClassDetails(id);
//   console.log(classDetails);

//   return {
//     props: { classDetails },
//   };
// }

export default ClassDetails;
