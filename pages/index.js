import Head from 'next/head'
import Image from 'next/image'
import Card from './Card'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AgriAbhyas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div>
        <h1 className="title">
          Welcome to

        </h1>
        <b className='agriabhyas'> 
          AgriAbhyas
          </b>
        <p className="description">
        As they say, practice makes you perfect.AgriAbhyaas is your one stop platform to practice and excel in challenging subjects.
        </p>

        <p className='know'>
          KNOW YOUR SELF TESTS
        </p>
        </div>
        <div className='img1'>
      <Image className='img' src='/home.png' width={400} height={600} />
      </div>
      </main>
    <Card/>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          background: rgba(255, 255, 255, 0.8);
        }

        main {
          flex: 1;
          align-items: center;
          background: #0B6E4F;
          width: 100%;
          color: white;
          position: absolute;
          width: 1920px;
          height: 889px;
          display: flex;
          align-items: center;
          margin-left: -10px;
          margin-top: 4rem;
        }

        .img {
          height: 50vh;
          width: 50rem;
          max-height:100%;
          max-width:100%;
          margin-left:25vw;
        }

        .img1 {
          height: 60vh;
          width: 50vw;
          max-height:100%;
          max-width:100%;
          margin-left:25vw;
        }



        .title a {
          color: #000000;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
        
        }

        .agriabhyas {
          font-size: 5rem;
          margin-left: 3rem;
          color:white;
        }

        .title {
          margin-left: 3rem;
          line-height: 1;
          font-size: 4rem;
          
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          align-text: left;
          width: 747px;
          margin-left: 3rem;
        }

        .know {
          font-size: 2.5rem;
          font-weight: bold;
          margin-left: 3rem;
        }

        .dictionary {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 4rem auto;
          max-width: 90%;
        }
        
        .dictionary > .term {
          text-align: center;
          max-width: 20rem;
          margin-bottom: 3rem;
          padding: 2rem;
          border-radius: 3px;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          transition: all 100ms ease-in-out;
        }
        
        .dictionary > .term > dt {
          margin-bottom: 1rem;
        }
        
        dt {
          color: #2ec2b0;
          line-height: 1;
        }
        
        dt span {
          font-size: 200%;
          font-weight: 900;
        }
        
        .emoji {
          margin: 0 auto 20px;
          display: block;
          font-size: 400%;
        }
        
        dd {
          font-size: 92.5%;
          margin-left: 0;
        }
        
        dd dt {
          margin-top: 1rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
          font-size: inherit;
        }
        
        dd dl {
          font-size: 90%;
          margin: 1rem auto 0 auto;
          letter-spacing: 0.33px;
          max-width: 15rem;
        }
        
        dd dl .term {
          margin-bottom: 1rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
