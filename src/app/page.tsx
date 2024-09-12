import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/home/home-screen/HomeScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {

  return (
    <main>
      <HomeScreen />{" "}
    </main>
  );
}
