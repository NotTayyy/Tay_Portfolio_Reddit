import Header from "@/Components/Header";
import Reddit_Hero from "@/Components/Reddit_Hero";
import Main_Body from "@/Components/Main_Body"


// Create a MongooDB Database that Stores all the info of the Reddit and Pass it on to all the Children, Use that info to populate the Req Slots

//Create a Sub-Database that Houses all the Reddit Posts, Only send that to the Body

//Each post gets its own mini Database? or however it would be best to manage comments and Replys to those comments respectevly

export default function Home() {
  return (
    <div className="bg-reddit-Dark mx-auto h-screen w-screen text-white">
      <Header />
      <Reddit_Hero />
      <Main_Body />
    </div>
  )
}

