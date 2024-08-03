function useRequest() {
  const request = async (method, body = {}) => {
    return fetch(`http://machinist_creation/${method}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  return {
    request,
  };
}

export default useRequest;
