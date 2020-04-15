import React from 'react';
import { SignupWrapper } from '../style';
import signupHandler from '../handler/signupHandler';

export default signupHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError } = props;
    return (
        <SignupWrapper>
            <form onSubmit={handleSubmit}>
                <div>
                    {isShowError && errors.username && <div>{errors.username}</div>}
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Username"
                    
                    />
                </div>
                <div>
                    {isShowError && errors.email && <div>{errors.email}</div>}
                    <input
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    {isShowError && errors.password && <div>{errors.password}</div>}
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <div>
                    {isShowError && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit">Confirm</button>
            </form>
        </SignupWrapper>
    )
});