import { useState } from 'react';
import styles from './BookingForm.module.css';

function BookingForm({ onBook }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Ім’я є обов’язковим.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Телефон є обов’язковим.';
    } else if (!/^\+?\d{7,15}$/.test(phone.replace(/\s|-/g, '')) ) {
      newErrors.phone = 'Введіть коректний номер телефону.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email є обов’язковим.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Введіть коректну адресу email.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    onBook({ name: name.trim(), phone: phone.trim(), email: email.trim() });
    setName('');
    setPhone('');
    setEmail('');
    setErrors({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span>ПІБ</span>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Іван Іваненко" />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </label>

      <label className={styles.field}>
        <span>Телефон</span>
        <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+380XXXXXXXXX" />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="ivan@example.com" />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>

      <button type="submit" className={styles.submitButton}>Підтвердити бронювання</button>
    </form>
  );
}

export default BookingForm;
