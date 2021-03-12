import HeaderStyles from '../styles/Header.module.css'
import Title from './Title'

const Header = () => {
  return (
    <div>
      <Title t1="Ynov" t2="frontend"/>
      <p className={HeaderStyles.description}>
          This is a description in the Header
      </p>
    </div>
  )
}

export default Header
