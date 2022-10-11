import React from 'react';
import './FormRegistration.scss';
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom';


function FormRegistration() {

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm({
		mode: "all"
		}
	)

	const onSubmit = (data) => {
		reset();
		localStorage.setItem('auth', JSON.stringify(data));
		window.location.href = "/"	
	}

  return (

	<div className='form-block'>
		<div className="form-block__toggle">
			<Link to="/">Авторизоваться</Link>
		</div>
		<form onSubmit={handleSubmit(onSubmit)} className='form' >
			<h1 className="form__title">Регистрация</h1>
			<div className="form__wrappers">

				<div className="form__wrapper">
					<input className="form__item" type="text" placeholder="Логин" 
						{...register('login', {
							required: "Поле обязательно для заполнения",
							pattern: {
								value: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
								message: "E-mail невалидный"
							}
						})}/>
					{/* Всплывающие подсказки   */}
					 <div className="form__span-error">
					 	{errors?.login && <span>{errors?.login?.message || "Error!"}</span>}
					</div>
				</div>

				<div className="form__wrapper">
					<input className="form__item" type="password" placeholder="Пароль" 
						{...register('password', {
							required: "Поле обязательно для заполнения",
							minLength: {
								value: 8,
								message: "Пароль должен содержать как минимум 8 символов"
							}
						})}/>
					{/* <Всплывающие подсказки  */}
					<div className="form__span-error">
					 	{errors?.password && <span>{errors?.password?.message || "Error!"}</span>}
					</div>
				</div>

				<div className="form__check">
					<div className="form__wrapper">
						<div className="form__wrapper-flex">
							<input className="form__item" type="checkbox" id="input-agreement" name="input-agreement" 
								{...register('agreement', {
									required: "Поле обязательно для заполнения"
								})}  />
							<span className="form__custom-checkbox"></span>
							<label htmlFor="input-agreement"> Я согласен получать обновления на почту</label>	
						</div>
						{/* <Всплывающие подсказки  */}
						 <div className="form__span-error">
					 		{errors?.agreement && <span>{errors?.agreement?.message || "Error!"}</span>}
						</div>
					</div>
				</div>

			</div>
			
			<input type="submit"   className="form__btn" value="Зарегистрироваться"/>
		
		</form>
	</div>
	
	);
}

export default FormRegistration;