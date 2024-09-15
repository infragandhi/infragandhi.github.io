import { decode as decode64 } from 'base-64';
import { decode as decodeUtf8 } from 'utf8';

const decodeString = (toDecode: string | undefined): string => {
	if (toDecode === undefined) {
		throw new Error('Provided string is undefined');
	}

	const bytes = decode64(toDecode);
	return decodeUtf8(bytes);
};

export default decodeString;
