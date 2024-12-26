import { useRouter } from 'next/router';

export const useAppRoutes = () => {
  const router = useRouter();

  const goToWelcome = () => router.push('/welcome');
  const goToLogin = () => router.push('/login');
  const goToSignup = () => router.push('/signup');
  const goToTodo = () => router.push('/todo');

  return { goToWelcome, goToLogin, goToSignup, goToTodo };
};

