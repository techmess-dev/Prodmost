export const isStringEmpty = (str?: string | null): boolean => {
	return !str || str.trim().length === 0;
};

export const isValidImageUrl = (str?: string | null): boolean => {
	return !str || str.trim().length === 0;
}