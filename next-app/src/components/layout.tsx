export default function Layout(props: any) {
  return (
    <div className="pl-5 pr-5">
      <div>{props.children}</div>
    </div>
  );
}
