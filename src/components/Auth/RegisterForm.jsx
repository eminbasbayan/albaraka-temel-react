const RegisterForm = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Kayıt Ol</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="registerName" className="form-label">Ad Soyad</label>
          <input type="text" className="form-control" id="registerName" placeholder="Adınız Soyadınız" />
        </div>
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Email adresi</label>
          <input type="email" className="form-control" id="registerEmail" placeholder="email@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Şifre</label>
          <input type="password" className="form-control" id="registerPassword" placeholder="••••••••" />
        </div>
        <div className="mb-3">
          <label htmlFor="registerConfirm" className="form-label">Şifre (Tekrar)</label>
          <input type="password" className="form-control" id="registerConfirm" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn btn-success w-100">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterForm;
