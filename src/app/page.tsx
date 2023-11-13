import { Container } from "@/components/Container";
import { UserContact } from "@/components/UserContact";
import { UserImage } from "@/components/UserImage";

import userPhoto from "./user-photo.jpg";

export default function Home() {
  return (
    <main className="flex justify-center p-10">
      <Container className="relative">
        <UserContact
          email="zac.patrick@mail.com"
          phone="(+33) 6 32 43 1290"
          github="zacpatrick"
          linkedin="zacpatrick"
          twitter="zacpatrick"
        />
        <UserImage src={userPhoto} alt="Picture of the author" />
      </Container>
    </main>
  );
}
