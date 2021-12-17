import React from 'react';

import {LoginFormProps} from './LoginForm.interfaces';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./LoginForm.styles.css"
import {EntryViewComponents} from "../../../views/EntryView/EntryView.interfaces";

const LoginForm: React.FunctionComponent<LoginFormProps> = ({handleOnChange, handleSubmit, password, setView, email}) => {
	return (
		<Container className={"password-form"}>
			<Row>
				<Col>
					<h1>Client Login</h1>
					<hr/>
					<Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control value={email} type={"email"} name={"email"} onChange={handleOnChange} placeholder={"Enter Email"} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type={"password"} name={"password"} onChange={handleOnChange} placeholder={"Enter Password"} required/>
                        </Form.Group>

                        <Button type={"submit"} >Login</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				{/*Add padding below form*/}
				<hr/>
				<Col>
					<a href="#!" onClick={() => setView(EntryViewComponents.PasswordReset)} >Forgot Password?</a>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
