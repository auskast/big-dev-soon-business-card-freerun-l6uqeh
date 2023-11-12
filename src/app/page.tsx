import { Container } from "@/components/Container";
import { UserContact } from "@/components/UserContact";

export default function Home() {
  return (
    <main className="flex justify-center p-10">
      <Container>
        <UserContact
          email="zac.patrick@mail.com"
          phone="(+33) 6 32 43 1290"
          github="zacpatrick"
          linkedin="zacpatrick"
          twitter="zacpatrick"
        />
      </Container>
    </main>
  );
}
