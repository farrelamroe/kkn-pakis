import { Container, H1, MainHero } from "@/components";

export function Homepage() {
  return (
    <>
      <MainHero
        image="/pucung/week-1-pucung-1.jpeg"
        title={
          <>
            KKN-PPM UGM
            <br />
            Pakis 2024
          </>
        }
        description="Dolor magna in occaecat sint elit Lorem eiusmod dolor amet occaecat ipsum. Proident aute ipsum laborum sunt consequat ea ut duis quis et esse voluptate. Cillum aliquip excepteur ipsum Lorem ea nostrud aliquip laborum in labore exercitation. Dolor do et proident cupidatat incididunt cupidatat."
      />
      <Container>
        <H1 className="font-jakarta">Apa itu KKN pakis?</H1>
      </Container>
    </>
  );
}
