import Header from "@/Components/Header";
import Reddit_Hero from "@/Components/Reddit_Hero";
import Main_Body from "@/Components/Main_Body"

export default function Home() {
  return (
    <div className="bg-reddit-Dark mx-auto h-screen w-screen text-white">
      <Header />
      <Reddit_Hero />
      <Main_Body />
    </div>
  )
}

