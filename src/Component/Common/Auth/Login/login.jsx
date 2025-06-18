import React from 'react'

import { useForm } from 'react-hook-form';

// Import images
import Loginimg from "../../../../assets/Login-img/Frame 1171277201.svg";
import Logo from '../../../../assets/navbar/navCenterImg.svg';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
    };

    return (
        <>
            <div className='login-bg-img vh-100'>
                <div className="nav-logo text-center">
                    <img className='header-center-img width-13' src={Logo} alt="logo" />
                </div>
                <div className='row p-4 d-flex justify-content-center'>
                    <div className='col-lg-7'>
                        <div className='text-center mt-5'>
                            <p className='font-size-46 text-blue montserrat-bold mb-3'>Login</p>
                            <p className='text-blue montserrat-semibold font-size-20 pb-3'>Log in to continue enjoying the perks and stay engaged with our exciting reward and referral program!</p>
                        </div>
                        <div className='login-form-section row py-2 px-3 d-flex align-items-center justify-content-center'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='login-img'>
                                    <img src={Loginimg} alt="Laoding" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3 mt-5">
                                        <input type="text" class="form-control py-2" id="exampleFormControlInput1" placeholder="Your Name"
                                            {...register('name', { required: 'Name is required' })}
                                        />
                                        {errors.name && <div className="text-danger">{errors.name.message}</div>}
                                    </div>
                                    <div class="mb-4">
                                        <input type="email" class="form-control py-2" id="exampleFormControlInput1" placeholder="Your E-mail"
                                            {...register('email', {
                                                required: 'Email is required',
                                                // pattern: {
                                                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                //     message: 'Invalid email address',
                                                // },
                                            })}
                                        />
                                        {errors.email && <div className="text-danger">{errors.email.message}</div>}
                                    </div>
                                    <button type='submit' className='montserrat-bold w-100 font-size-16 py-2 rounded-3 background-text-blue text-white'>Login</button>
                                    <p className='font-size-16 montserrat-medium text-center mt-3 text-light-gray'>Powered by Red Vision Technologies</p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;