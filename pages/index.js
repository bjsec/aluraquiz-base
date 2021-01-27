import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../src/components/Button'
import Input from '../src/components/Input'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useSTATE', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>BJSECURITY</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz sobre Segurança Cibernética</h1>
          </Widget.Header>
          <Widget.Content>
          <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submissao por meio do react');                        
            }}
            >
              <Input 
                  name="nomeDoUsario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}      
                  placeholder="Digite teu nome"  
                  value={name}                           
              />              
              <Button type="submit"  disabled={name.length === 0} >
                {`Jogue ${name}`}
              </Button> <br></br>
                                     
            </form>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Esperando vocês</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}