import React from "react";

interface SplitViewOwnProps {
	left: React.ReactElement;
	right: React.ReactElement;
	className?: string;
}

export type SplitViewProps =
  SplitViewOwnProps;
