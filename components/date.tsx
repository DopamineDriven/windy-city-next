import { parseISO, format } from 'date-fns';

interface ModifiedProps {
	modifiedString: string;
}

const Date = ({ modifiedString }: ModifiedProps): JSX.Element => {
	const date: Date = parseISO(modifiedString);
	return <time dateTime={modifiedString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default Date;
