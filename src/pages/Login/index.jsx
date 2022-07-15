import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import styles from './login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        console.log(`E-mail: ${email} - Senha: ${senha}`);
        event.preventDefault();
        if (email && email.trim() && senha && senha.trim()) {
          localStorage.setItem('token', '123');
          navigate("/");
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Insira seu e-mail" value={email} onChange={(event) => {
                            setEmail(event.target.value);
                        }} 
                    />
                    <Form.Text className="text-muted">
                    Nunca compartilhe seu e-mail (que será seu nome de usuário) com ninguém.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Insira sua Senha" value={senha} onChange={(event) => {
                            setSenha(event.target.value);
                        }}
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}

export default Login;