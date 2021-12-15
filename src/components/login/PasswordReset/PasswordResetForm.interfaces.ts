import React, {ChangeEvent} from "react";
import {EntryViewComponents} from "../../../views/EntryView/EntryView.interfaces";

interface PasswordResetFormOwnProps {
	handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
	email: string;
	handleSubmit: (event: React.SyntheticEvent) => void;
	setView: (view: EntryViewComponents) => void;
}

export type PasswordResetFormProps =
  PasswordResetFormOwnProps;
