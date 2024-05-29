/* eslint-disable react/jsx-key */
import Reddit_Posts_Empty from './Reddit_Posts_Empty';

const posts = [
  {
    userName: 'GrannyBacon',
    postTitle: 'How Much Wood Could A Wood Chuck Chuck...',
    postContent: 'As many as 2 Wood chucks Divided in half!'
  },
  {
    userName: 'Fingees',
    postTitle: 'Dont Look Down',
    postContent: 'YOu might fall into the Deep~'
  },
  {
    userName: 'Dirty Harry',
    postTitle: 'How do I get rid of this Rash?',
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, illo molestias! Similique debitis explicabo natus? Reiciendis enim minus molestias iusto temporibus rerum, ducimus sed excepturi dicta voluptates suscipit quam quis!'
  },
  {
    userName: 'Daxstix',
    postTitle: 'How do I find small green men with Fat Asses',
    postContent: 'Hi so ive been looking into these things called "Goblins" and they seem pretty neat! So I Was trying to find em and hopefully they have fat asses'
  },
  {
    userName: 'GrannyBacon',
    postTitle: 'Is Shinto as important in Japan as depicted in animes?',
    postContent: "I hope this is a fair question to ask. Recently I've learned how far from Japanese reality most animes are. This is, of course, normal; fiction is where our imagination can roam free. But, exemplifying with high school animes, hair styles and uniforms are strictly kept in check, there are no love confessions every break (or at all at school?), girls don't cook bentos for everyone, many times you can't even go to rooftops, although this is a must in these animes."
  }
]

function Reddit_Posts() {
  return (
    <>
      <div>
      {posts.map(posts => (
        <Reddit_Posts_Empty key={posts} {...posts} />
      ))}
      </div>
    </>
  )
}

export default Reddit_Posts;