export const sanitizeUUID = (uuid: string): void => {
    uuid = uuid.trim();  // Remove any leading or trailing whitespace
    const uuidRegExp: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (typeof uuid !== "string" || !uuidRegExp.test(uuid)) {
        throw new Error('Invalid UUID');
    }
}
