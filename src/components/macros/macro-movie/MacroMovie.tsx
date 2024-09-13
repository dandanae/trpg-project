import { useAtomValue } from 'jotai'
import { movieImageUrl, movieLabel } from './MacroMovieAtoms'

const MacroMovie = () => {
  const label = useAtomValue(movieLabel)
  const imageUrl = useAtomValue(movieImageUrl)

  return (
    <div
      css={[
        `
      display: block;
      width: 250px;
      margin: auto;
      padding: 120px 12px 12px 12px;
      background-color: #000000;
      background-position: center;
      background-size: cover;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 150%;
      font-family: verdana, sans-serif;
      text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
      color: white;
      `,
      ]}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {label}
    </div>
  )
}

export default MacroMovie
