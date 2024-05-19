import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Heading from '@/Components/Heading';
import Paragraph from '@/Components/Paragraph';
import GoogleButton from '@/Components/GoogleButton';
import FacebookButton from '@/Components/FacebookButton';
import PasswordValidation from '@/Components/PasswordValidation';
import Line from '@/icon/Line';
import Mail from '@/icon/Mail';
import Person from '@/icon/Person';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Heading level={7}>
                Create your account
            </Heading>

            <Paragraph className='mb-6 mt-3'>
                Hello there! Welcome abroad! I'm glad you're interested in creating an account
            </Paragraph>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        placeholder="enter your name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        svgIcon={<Person />}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        svgIcon={<Mail />}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Create Password" />

                    <PasswordValidation
                        password={data.password}
                        onChange={handleOnChange}
                        className="mb-1"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center my-4">
                    <Line></Line>
                        <span className="mx-3 text-sm text-gray-400">Or</span>
                    <Line></Line>
                </div>

                <div className="flex items-center justify-around gap-2 mb-10 flex-col sm:flex-row">
                    <GoogleButton className="w-full sm:w-auto">
                        <span className="font-bold text-gray-800 pl-1">Sign in with Google</span>
                    </GoogleButton>
                    <FacebookButton className="w-full sm:w-auto">
                        <span className="font-bold text-gray-800 pl-1">Sign in with Facebook</span>
                    </FacebookButton>
                </div>



                <div className="flex items-center justify-end mb-3">
                    <PrimaryButton disabled={processing}>
                        Sign Up
                    </PrimaryButton>
                </div>
            </form>

            <Paragraph className='text-center text-sm'>
                Already have an account?
                <Link href='/login' className='text-cyan-600 hover:text-hover-900 font-bold'> Login </Link>

            </Paragraph>

        </GuestLayout>
    );
}
