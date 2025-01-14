import Image from 'next/image'
import { Button } from '../Button/styled'
import * as S from './styled'

const Welcome = () => (
  <S.Wrapper>
    <S.Container>
      <S.DetailContainerTop src="/images/detail-1.svg" />
      <S.Content>
        <S.EntryContent>
          <h1>Bem vindo Marcio,</h1>
          <p>
            Para você aproveitar nossas oportunidades primeiro você precisa
            estar dentro de um grupo, estamos aqui para lhe ajudar.
          </p>
        </S.EntryContent>
        <S.Call>
          <p>O que você prefere?</p>
          <Button>Criar um grupo</Button>
          <Button>Entrar em um grupo</Button>
        </S.Call>
      </S.Content>
      <S.ImageWrapper>
        <Image
          src="/images/image-1.png"
          width={500}
          height={500}
          objectFit="cover"
        />
      </S.ImageWrapper>
      <S.DetailContainerBottom src="/images/detail-2.svg" />
    </S.Container>

    <S.ImageMask>
      <clipPath id="mask">
        <path
          d="M0 15.65C0 7.3361 6.19543 0 6.19543 0H418V313H6.19543C6.19543 313 12.3909 305.664 12.3909 297.35C12.3909 289.036 6.19543 281.7 6.19543 281.7C6.19543 281.7 0 274.364 0 266.05C0 257.736 6.19543 250.4 6.19543 250.4C6.19543 250.4 12.3909 243.064 12.3909 234.75C12.3909 226.436 6.19543 219.1 6.19543 219.1C6.19543 219.1 0 211.764 0 203.45C0 195.136 6.19543 187.8 6.19543 187.8C6.19543 187.8 12.3909 180.464 12.3909 172.15C12.3909 163.836 6.19543 156.5 6.19543 156.5C6.19543 156.5 0 149.164 0 140.85C0 132.536 6.19543 125.2 6.19543 125.2C6.19543 125.2 12.3909 117.864 12.3909 109.55C12.3909 101.236 6.19543 93.9 6.19543 93.9C6.19543 93.9 0 86.5639 0 78.25C0 69.9361 6.19543 62.6 6.19543 62.6C6.19543 62.6 12.3909 55.2642 12.3909 46.95C12.3909 38.6358 6.19543 31.3 6.19543 31.3C6.19543 31.3 0 23.9639 0 15.65Z"
          fill="#C4C4C4"
        />
      </clipPath>
    </S.ImageMask>
    <S.Footer>
      Qualquer dúvida que você tiver é só nos chamar no nosso número de{' '}
      <a href="">WhatsApp</a>.
    </S.Footer>
  </S.Wrapper>
)
export default Welcome
