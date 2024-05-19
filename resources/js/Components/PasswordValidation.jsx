import React, { useState } from 'react';
import Key from '@/icon/Key';
import TextInput from '@/Components/TextInput';

const PasswordValidation = ({ password, onChange }) => {
    const [validation, setValidation] = useState({
        uppercase: false,
        number: false,
        length: false,
        lowercase: false,
        special: false,
    });

    const validatePassword = (password) => {
        const validations = {
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            length: /.{8,}/.test(password),
            lowercase: /[a-z]/.test(password),
            special: /[@$!%*#?&]/.test(password),
        };
        setValidation(validations);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        onChange(event);
        validatePassword(newPassword);
    };

    const CheckIcon = ({ isValid }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isValid ? "#06b6d4" : "#d4d8d4"} className={`w-4 h-4`}>
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
    );

    return (
        <div>
            <TextInput
                id="password"
                type="password"
                name="password"
                placeholder="enter your password"
                value={password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={handlePasswordChange}
                svgIcon={<Key />}
                required
            />
            {password && (
                <div id="password-validation" className="space-y-2 mt-2">
                    <div className="flex flex-wrap">
                        {Object.entries(validation).map(([key, isValid]) => (
                            <div key={key} className="flex items-center w-1/2 mb-2">
                                <CheckIcon isValid={isValid} />
                                <div className={`text-sm ml-1 font-medium ${isValid ? '' : 'text-gray-500'}`}>
                                    {key === 'uppercase' && 'One uppercase character'}
                                    {key === 'number' && 'One number'}
                                    {key === 'length' && '8 character minimum'}
                                    {key === 'lowercase' && 'One lowercase character'}
                                    {key === 'special' && 'One special character'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PasswordValidation;
