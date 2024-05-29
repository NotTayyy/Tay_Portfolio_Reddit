
import Header from "@/src/components/Header";
import Reddit_Hero from "@/src/components/Reddit_Hero";
import Main_Body from "@/src/components/Main_Body"

export default function Home() {
  return (
    <div className="bg-reddit-Dark mx-auto h-screen text-white m-0 p-0">
        <Header />
        <Reddit_Hero />
        <Main_Body />


    </div>
  )
}

