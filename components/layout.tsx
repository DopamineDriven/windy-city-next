import { ReactNode } from 'react';

type Props = {
	preview?: boolean;
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
		</>
	);
}
