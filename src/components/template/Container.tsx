export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative overflow-hidden rounded-[20px] p-[104px] h-screen ${className}`}
    >
      {children}
    </main>
  );
}
