import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schemas/loginSchema';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Form verisi:', data);
    // örnek çıktı: { email: "...", password: "...", remember: true, role: "admin" }
  };

  console.log(errors);

  return (
    <form
      className="container mt-5"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: '400px' }}
    >
      <h2 className="mb-4 text-center">Giriş Yap</h2>

      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email adresi
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          placeholder="email@example.com"
          {...register('email')}
        />
        <p className="text-danger mt-2 text-sm">{errors.email?.message}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Şifre
        </label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="••••••••"
          {...register('password')}
        />
        <p className="text-danger"> {errors.password?.message} </p>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Giriş Yap
      </button>
    </form>
  );
};

export default LoginForm;
