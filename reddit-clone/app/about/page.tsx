import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The About Us Page',
}

export default function about() {
  return (
    <h1>About Us</h1>
  )
}
