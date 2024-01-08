export const sendRequest = async (callback: () => Promise<any>) => {
  try {
    return await callback();
  } catch (error) {
    console.error('error in request', error);
  }
};
