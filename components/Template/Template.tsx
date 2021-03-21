import Head from 'next/head'

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  )
}

export default Template;