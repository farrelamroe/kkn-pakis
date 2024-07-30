export function ContainerArticle(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative overflow-hidden rounded-[20px] px-[50px] pt-[2px] lg:px-[200px] ${className}`}
    >
      {children}
    </main>
  );
}
