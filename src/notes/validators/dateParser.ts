import { dateRegex } from '../constants/notes.constants';

const dateParser = (content: string): string[] => {
	const dates = content.match(dateRegex);
	return dates || [];
};

export default dateParser;
