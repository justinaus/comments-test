import {DiscussionEmbed} from "disqus-react"

type Props = {
  post: {
    id: string
    title: string
  }

}

const DisqusComments = ({ post }:Props) => {
  const disqusShortname = "comments-test-4"
  const disqusConfig = {
    // url: "https://your-site-url/post-slug",
    url:'https://comments-test-fawn.vercel.app',
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;