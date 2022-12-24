import Head from "next/head"

const HeadMeta = ({ title = 'Studio Legale Manzi e Associati Roma', desc = ''}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
    </Head>
  )
}

export default HeadMeta