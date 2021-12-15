import React, {ChangeEvent, useState} from 'react';
import './EntryView.styles.css'
import "bootstrap/dist/css/bootstrap.min.css"

import {EntryViewProps, EntryViewComponents} from './EntryView.interfaces';
import {LoginForm} from "../../components/login/LoginForm";
import PasswordResetForm from "../../components/login/PasswordReset/PasswordResetForm";

const EntryView: React.FunctionComponent<EntryViewProps> = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [view, setView] = useState<EntryViewComponents>(EntryViewComponents.Login);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		switch (event.target.name) {
			case "email":
				setEmail(event.target.value);
				break;
			case "password":
				setPassword(event.target.value);
				break;
			default:
				console.log("error setting login form values")
		}
	}

	const handleOnSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		// TODO: Log account in
	}

	return (
		<div className="entry-page">
			{view === EntryViewComponents.Login &&
				<LoginForm handleOnChange={handleOnChange} handleSubmit={handleOnSubmit} password={password} email={email} setView={setView}/>
			}
			{view === EntryViewComponents.PasswordReset &&
				<PasswordResetForm handleSubmit={handleOnSubmit} email={email} handleOnChange={handleOnChange} setView={setView}/>
			}
		</div>
	);
};

export default EntryView;