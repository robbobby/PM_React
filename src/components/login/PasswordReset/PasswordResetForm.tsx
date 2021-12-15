import React from 'react';

import {PasswordResetFormProps} from './PasswordResetForm.interfaces';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./PasswordResetForm.styles.css"
import {EntryViewComponents} from "../../../views/EntryView/EntryView.interfaces";

const PasswordResetForm: React.FunctionComponent<PasswordResetFormProps> = ({handleOnChange, handleSubmit, setView, email}) => {
	return (
		<Container className={"password-form"}>
			<Row>
				<Col>
					<h1>Reset Password</h1>
					<hr/>
					<Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control value={email} type={"email"} name={"email"} onChange={handleOnChange} placeholder={"Enter Email"} required/>
                        </Form.Group>
                        <Button type={"submit"} >Reset Password</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				{/*Add padding below form*/}
				<hr/>
				<Col>
					<a href="#!" onClick={() => setView(EntryViewComponents.Login)} >Back to Login</a>
				</Col>
			</Row>
		</Container>
	);
};
export default PasswordResetForm;
