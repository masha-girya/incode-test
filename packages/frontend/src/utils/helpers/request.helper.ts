export const sendRequest = async (
  callback: () => Promise<any>,
  finallyCallback?: () => any,
) => {
  try {
    return await callback();
  } catch (error) {
    console.error('error in request', error);
  } finally {
    if (finallyCallback) {
      finallyCallback();
    }
  }
};
