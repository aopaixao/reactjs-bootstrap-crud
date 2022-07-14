import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './formularioauxiliar.module.css';

const FormularioAuxiliar = () => {
    const [perfil, setPerfil] = useState('');

    const handleSubmit = () => {
        console.log(`Perfil: ${perfil}`);
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Perfil</Form.Label>
                    <Form.Control type="text" placeholder="Insira o nome do Perfil" value={perfil} onChange={(event) => {
                            setPerfil(event.target.value);
                        }} 
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default FormularioAuxiliar;