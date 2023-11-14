import { Container } from "@/components/Container";
import { Shapes } from "@/components/Shapes";
import { UserContact } from "@/components/UserContact";
import { UserImage } from "@/components/UserImage";
import { UserInfo } from "@/components/UserInfo";

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
        <UserInfo
          firstName="Zac"
          lastName="Patrick"
          title="Front-end Developer"
          location="San Francisco"
          description="High accomplishment and user-focused Front-end Developer adept in collaborating with UX and design teams to plan the technical writing and execution of functional specifications for websites and applications."
          technologies={["JavaScript", "React", "Node.js", "GraphQL"]}
        />
        <Shapes />
      </Container>
    </main>
  );
}
