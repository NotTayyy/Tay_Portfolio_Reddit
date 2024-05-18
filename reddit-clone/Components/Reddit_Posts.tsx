/* eslint-disable react/jsx-key */
import Reddit_Post_Tmp from '../Components/Reddit_Post_Tmp';
import Reddit_Posts_Empty from '../Components/Reddit_Posts_Empty';

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
  }
]

function Reddit_Posts() {
  return (
    <>
      <Reddit_Post_Tmp />
      <div>
      {posts.map(posts => (
        <Reddit_Posts_Empty key={posts} {...posts} />
      ))}
      </div>
    </>
  )
}

export default Reddit_Posts;