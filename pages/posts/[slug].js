import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'

import { getAllPostsWithSlug, getPost } from '../../lib/api'

export default function Post({ postData }) {
  
	const router = useRouter();
	
	if(!router.isFallback && !postData?.slug){
		return <p>hmmm...looks like a error</p>;   
    }
	
	return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <br />
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  )
}


export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
 
  return {
    paths: allPosts.edges.map(({node}) => `/posts/${node.slug}`) || [],
    fallback: false
  }
	
}

export async function getStaticProps({ params }) {
	
  const data = await getPost(params.slug)
  return {
    props: {
      postData:data.post
    }
  }
}

