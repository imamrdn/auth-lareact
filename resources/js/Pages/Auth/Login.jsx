import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Heading from '@/Components/Heading';
import Paragraph from '@/Components/Paragraph';
import GoogleButton from '@/Components/GoogleButton';
import Line from '@/icon/Line';
import FacebookButton from '@/Components/FacebookButton';
import Mail from '@/icon/Mail';
import Key from '@/icon/Key'
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <Heading level={1} className="mb-3">
                Welcome<span role="img" aria-label="wave" className="text-5xl">👋</span>
            </Heading>

            <Paragraph className='mb-6'>
                Welcome back! Enter your login details to access your account
            </Paragraph>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        placeholder="enter your email"
                        value={data.email}
                        className="mt-1  w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleOnChange}
                        svgIcon={<Mail />}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                        svgIcon={<Key />}
                        hasError={!!errors.password}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-between mt-3">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                        <span className="ml-2 text-sm text-gray-500">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm font-semibold text-cyan-600 hover:text-cyan-900 rounded-md focus:outline-none"
                        >
                            Forget password?
                        </Link>
                    )}
                </div>

                <div className="flex items-center my-4">
                    <Line></Line>
                        <span className="mx-3 text-sm text-gray-400">Or</span>
                    <Line></Line>
                </div>

                <div className="flex items-center justify-around gap-2 mb-10">
                    <GoogleButton>
                        <span className="font-bold text-gray-800 pl-1">Sign in with Google</span>
                    </GoogleButton>
                    <FacebookButton>
                        <span className="font-bold text-gray-800 pl-1">Sign in with Facebook</span>
                    </FacebookButton>
                </div>

                <div className="flex items-center justify-end mb-3">
                    <PrimaryButton disabled={processing}>
                        Login
                    </PrimaryButton>
                </div>
            </form>

            <Paragraph className='text-center text-sm'>
                Don't have an account?
                <Link href='/register' className='text-cyan-600 hover:text-hover-900 font-bold'> Sign Up </Link>

            </Paragraph>

        </GuestLayout>
    );
}
