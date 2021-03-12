import titleStyles from '../styles/Title.module.css'

const Title = (props) => {
  return (
    <h1 className={titleStyles.title}>
        <span>{props.t1}</span>{props.t2}
    </h1>
  )
}

export default Title
