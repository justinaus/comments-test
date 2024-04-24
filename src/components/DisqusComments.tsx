import {CommentCount, CommentEmbed, DiscussionEmbed} from "disqus-react"

type Props = {
  post: {
    id: string
    title: string
  }

}

const DisqusComments = ({ post }:Props) => {
  const disqusShortname = "comments-test2"
  
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={{
          url:'https://comments-test-fawn.vercel.app',
          identifier: post.id, // Single post id
          title: post.title // Single post title
        }}
      />
      {/* <CommentEmbed commentId={'1fakdhlafdj'} showMedia={true}
    showParentComment={true}
    width={420}
    height={320}  /> */}
    {/* <CommentCount
    shortname={disqusShortname}
    config={
        {
          url:'https://comments-test-fawn.vercel.app',
          identifier: post.id, // Single post id
          title: post.title // Single post title
        }
    }
>
    Comments
</CommentCount> */}
    </div>
  )
}
export default DisqusComments;