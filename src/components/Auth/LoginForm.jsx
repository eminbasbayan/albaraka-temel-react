import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form verisi:', data);
    // örnek çıktı: { email: "...", password: "...", remember: true, role: "admin" }
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Giriş Yap</h2>

      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">Email adresi</label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          placeholder="email@example.com"
          {...register('email')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Şifre</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="••••••••"
          {...register('password')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">Kullanıcı Rolü</label>
        <select className="form-select" id="role" {...register('role')}>
          <option value="">Rol Seçiniz</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="user">Kullanıcı</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="rememberMe"
          {...register('remember')}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Beni Hatırla
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-100">Giriş Yap</button>
    </form>
  );
};

export default LoginForm;
