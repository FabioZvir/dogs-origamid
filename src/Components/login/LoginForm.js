import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const { userLogin, error, loading } = React.useContext(UserContext);


    async function handleSubmit(event) {
        event.preventDefault();
        
        if(username.validate() && password.validate()) {
            userLogin(username.value, password.value )
        }
    }


  return (
    <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='Text' name='username' {...username}/>
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>)
          : (
          <Button>Entrar</Button>
        )}
        <Error error = {error} />
        </form>
        <Link className={styles.perdeu} to='/login/perdeu'>
          Perdeu a senha?
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastra-se</h2>
          <p>Ainda Não Possui conta cadastra-se no site</p>
          <Link className={stylesBtn.button} to='/login/criar'>Cadastrar </Link>
        </div>
    </section>
  )
}

export default LoginForm