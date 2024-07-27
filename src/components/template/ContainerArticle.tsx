export function ContainerArticle(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative overflow-hidden rounded-[20px] px-[50px] lg:px-[200px] pt-[2px] ${className}`}
    >
      {children}
    </main>
  );
}
