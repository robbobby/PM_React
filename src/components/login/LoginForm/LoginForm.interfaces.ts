import React, {ChangeEvent} from "react";
import {EntryViewComponents} from "../../../views/EntryView/EntryView.interfaces";


interface LoginFormOwnProps {
	handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
	password: string;
	email: string;
	handleSubmit: (event: React.SyntheticEvent) => void;
	setView: (view: EntryViewComponents) => void;
}

export type LoginFormProps =
  LoginFormOwnProps;
