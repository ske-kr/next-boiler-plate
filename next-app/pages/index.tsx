export default function Home() {
  return (
    <div>
      홈페이지
      <h1>ENV: {process.env.NODE_ENV}</h1>
      <h3>ENV_VAR_TEST:{process.env.NEXT_PUBLIC_TEST}</h3>
    </div>
  );
}
