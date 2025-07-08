
export const generatePatientId = (): string => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 for shorter string
  const randomPart = Math.random().toString(36).substring(2, 7); // 5 random base36 characters
  return `PRAY-${new Date().getFullYear()}-${timestamp}-${randomPart}`.toUpperCase();
};
