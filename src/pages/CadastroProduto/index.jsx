import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import styles from './cadastroproduto.module.css';
import CadastroCategoria from '../CadastroCategoria';

const CadastroProduto = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        console.log(`E-mail: ${email} - Senha: ${senha}`);
    }

    const handleCloseModal = () => setShowModal(false);

    return (
        <Container>
            <Form>
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
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPerfil">
                            <Form.Select aria-label="Perfil">
                                <option>Selecione</option>
                                <option value="1">Editor</option>
                                <option value="2">Revisor</option>
                            </Form.Select>                    
                        </Form.Group>
                    </Col>
                    <Col>
                    <Button className={`${styles.btnAddPerfil}`} onClick={() => setShowModal(true)} >+</Button>
                    </Col>
                </Row>
                <Button variant="primary" onClick={handleSubmit}>
                    Enviar
                </Button>
            </Form>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CadastroCategoria />
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default CadastroProduto;