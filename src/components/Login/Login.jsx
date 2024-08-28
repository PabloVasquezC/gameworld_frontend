import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';   

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
      <Form.Group controlId="validationCustomUsernameOrEmail">
      <Form.Label>Ingresa tu email o nombre de usuario</Form.Label>
      <Form.Control
        type="text"
        placeholder="ejemplo@gmail.com"
        required
      />
      <Form.Control.Feedback type="invalid">
        ejemplo@gmail.com
      </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validationCustomPassword" className="mt-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="*********"
          required
        />
        <Form.Control.Feedback type="invalid">
          *********
        </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="mt-4 bg-purple">Log in</Button>
        <div>
        <div>
            <span className='m-4'>¿Olvidaste tu contraseña? 
            <a href='#'>Recupérala</a>
            </span>
            <span className='m-4'>¿No tienes cuenta? <a href='#'>Regístrate</a></span>
        </div>
      </div>
      </Form>
    </div>
  );
}

export default Login;
